"use strict";

// live reload settings
var LIVERELOAD_PORT = 35729;
var lrSnippet = require("connect-livereload")({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
	return connect.static(require("path").resolve(dir));
};



module.exports = function(grunt) {

	var markdown = require("marked");
	var fs = require("fs");
	var path = require("path");
	var _ = require("lodash");

	// show elapsed time at the end
	require("time-grunt")(grunt);

	// load all grunt tasks
	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		connect: {
			options: {
				port: 9000,
				hostname: "localhost"
			},
			livereload: {
				options: {
					middleware: function (connect) {
						return [
							lrSnippet,
							mountFolder(connect, "")
						];
					}
				}
			},
		},
		open: {
			server: {
				path: "http://localhost:<%= connect.options.port %>"
			}
		},
		watch: {
			sass: {
				files: ["assets/scss/**/*.scss"],
				tasks: ["sass"]
			},
			md: {
				files: ["writings/*.md"],
				tasks: ["compose"],
				options: {
					livereload: true
				}
			},
			livereload: {
				options: {
					livereload: LIVERELOAD_PORT
				},
				files: [
					"**/*.{html,css,jpg,gif,png}"
				]
			}
		},
		sass: {
			compile: {
				options: {
					style: "compressed"
				},
				files: [{
					expand: true,
					cwd: "assets/scss",
					src: "*.scss",
					dest: "assets/css",
					ext: ".css"
				}]
			}
		},
		autoprefixer: {
			options: {
				browsers: ["last 1 version"]
			},
			css: {
				files: [{
					expand: true,
					cwd: "assets/css",
					src: "{,*/}*.css",
					dest: "assets/css"
				}]
			}
		},
		concurrent: {
			compose: ["compose"]
		}
	});


	/**
	 * Build "writings" pages
	 */
	grunt.registerTask("compose", function() {

		// get header and footer includes
		// convert md to html
		var writings = fs.readdirSync("writings");

		// get header and footer
		var intro = fs.readFileSync("inc/intro.html"),
			outro = fs.readFileSync("inc/outro.html");

		// add header and footer
		var concat = function(writing) {

			// remove first heading since its displayed at the top of the page
			var content = writing.replace(/<h1>(.+)<\/h1>/, "");

			return intro + content + outro;
		};


		// get the title of the writing (first h1 tag)
		var getWritingTitle = function(writing) {
			var heading = writing.match(/<h1>(.+)<\/h1>/)[0],
				headingText = heading.match(/[^<\/h1>]+/);
			return headingText;
		};


		// loop through files
		for (var i in writings) {
			// .md files
			if (path.extname(writings[i]) === ".md") {

				var data = {};

				var writing = fs.readFileSync("writings/" + writings[i], "utf-8");

				// get writing title
				data.slug = writings[i].replace(/\.md/ig, ".html");

				data.html = markdown(writing);

				data.title = getWritingTitle(data.html);

				// compose document
				var _composition = concat(data.html);

				// then run it through _lodash
				var composition = _.template(_composition, data);

				// write file
				fs.writeFileSync("writings/" + data.slug, composition);
			}
		}

	});


	// compile scss and parse markdown
	grunt.registerTask("compile", [
		"concurrent:compose",
		"sass",
		"autoprefixer"
	]);

	// startup a livereload server for development
	grunt.registerTask("server", [
		"compile",
		"connect:livereload",
		"open",
		"watch"
	]);

};
