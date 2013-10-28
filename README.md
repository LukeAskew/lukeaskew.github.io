# lukeaskew.github.io

These are the guts of my github.io page. I created a publishing workflow that works great for me. The goal was to create a minimal speed-to-publish blog-like site. With a few simple Grunt task, I think I've gotten pretty close. Here's how it works...

## Behind the scenes

Github pages are pretty static, so If you want to achieve anything that resembles a blog, you've got to be creative. I love the constraints.

### Achieving the "template"

All the magic happens with [Grunt](https://npmjs.org/package/grunt). I wrote a task `compose` that:

1. Watches the `writings/` directory for updates to any `.md` file.
1. Parses the markdown using [Marked](https://npmjs.org/package/marked), and sandwiches the output html in between `inc/intro.html` and `inc/outro.html`.
1. During the conversion of markdown to html, the `compose` task gathers some info about the writing - specifically the title (first `<h1>`). [lodash](https://npmjs.org/package/lodash) then uses that data to template the `<title>` tag and special "hero" heading.

### Benefits

- Straightforward and simple
- Few dependencies
- One language (JavaScript) end-to-end
- Markdown makes collaborating a breeze


## Start writing

Creating a writing is easy.

1. Create a new markdown document in  `writings/`.
1. Once finished, `cd` into the directory and run `grunt`.
1. Push to Github.

If you want to preview the post before pushing, run `grunt server` to start the site.
