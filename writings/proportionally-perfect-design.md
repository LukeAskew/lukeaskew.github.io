# Proportionally-perfect Design

It seems like this whole movement toward responsive design has given developers even more reason to push back against "pixel-perfect" design - the idea that what the developer produces actually matches the creative design he was given. It's an understandable frustration on behalf of the developer. The browser is the most unpredictable and volatile environments to write code. So what you usually end up getting is a website _mostly_ matches the "approved" creative, but with misaligned elements and disjointed spacing "because that's just how the web is".

That is total hot garbage.

Disregard for this kind of detail in the execution of a design cheapens the final product and its like giving a big middle finger to the designer who painstakingly nudged pixels until his creative vision was realized.


## How Design Happens
When a designer is establishing an aesthetic for a new project, one of the initial steps is to select a typeface. The designer chooses a font that looks promising, drops it into his design, then tweaks pixels and type size until she finds something that looks good. If she wants to try a different typeface, she goes through the same processes; replacing the font she just worked to refine with a new one, adjusting the spacing and size until the font works well with whatever design she's got so far.

The designer isn't keeping track of each time the exact pixel value of a font size or padding around an object changes - the medium (Photoshop) isn't built that way. Rather, she's paying attention to the proportion of the design. She's playing with the design - like a potter with clay or a sculptor with stone - until she finds that visual balance that just "looks right". This is "proportionally-perfect" design, and its what we're really after.

We can achieve this in code, but we have to start writing code in the same way a designer works with type - by using ems.

## Ems

An <a href="http://www.fontbureau.com/blog/the-em/" target="_blank">"em"</a> (pronounced like the letter "m") is a unit of measure, but unlike "pixels" or "points, ems are a relative unit defined by a font's _height_.

Typefaces are designed with a constant height. This practice was established with traditional typesetting when letters needed to fit in the same-sized row.

<figure>
	<a href="http://www.flickr.com/photos/7500409@N06/8445901342/" target="_blank">![Type Setting](http://farm9.staticflickr.com/8185/8445901342_64a483efa8.jpg)</a>
	<figcaption>Traditional type setting.</figcaption>
</figure>


Type designers still use this practice today. It is a helpful way to maintain consistent glyph size and proportion.

<figure>
	<a href="http://www.fontbureau.com/blog/the-em/" target="_blank">![Ems](http://media.fontbureau.com/images/posts/2008/typedesigners_em03.jpg)</a>
	<figcaption>Typeface set with constant height.</figcaption>
</figure>

Since ems are _relative_, that means their value changes based on the size of the font.

_If the font is 20px tall, 1em = 20px._

_If the font is set to 16px, 1 em = 16px._

Simple.

## Things you should be setting in ems

- Type (size, leading, kerning).
- Breakpoints.
- Container or grid maximum width.
- Margin and padding.

This approach may be new to many developers, and may be like lifting the veil for some designers. We have talked about design in terms of finite units of measure because that's what our tooling (Photoshop, InDesign) speaks back to us, but **the hidden language of web design is _proportion_**, specifically proportion centered on type. Once designers and developers begin speaking in this common language, the translation from Photoshop to code becomes more seamless. Design and code are married.


## Three things 

A website design work flow focused on ems is three things:

Harmonious.  
Accessible.  
Revealing.  

First, _harmonious_.

Setting type around a  measure ties your composition together with a <a href="http://modularscale.com/" target="_blank">common thread</a>. Line, texture, and color are the obvious drivers of aesthetic, but space plays an equally important role. 

Space is the thing that guides a user though the page.  

Space is the thing that creates rhythm and flow.

Space is the thing that makes the design usable.

Space is the thing that holds the design together.

... and the designer finds the perfect harmony of space by adjusting the proportion of elements and type.

The designer is actually designing space proportionally around the type, whether or not he is aware of it.

Whether or not the designer is aware of it, he is composing design around the proportion of type.

If code reflects this reality, then that design harmony is much easier to capture.

Second, _accessible_.

Design that uses a relative unit like em responds and adapts to a number of user contexts. If breakpoints are set in ems, then low-vision users who have their browser font size increased will experience the most optimal, most proportional experience. This is not true of designs defined in pixels.

The beauty of accessibility is that good design considerations benefit all users - they make the experience more accessible for _everyone_. Consider the use case above - a user with the browser's font size increased. But instead of a low-vision user, its a user sitting far away from their monitor, maybe a TV. They increase the font size, and if the code uses ems, the experience scales up and down beautifully, giving the user the absolute best experience.

<figure>
	<a href="http://video.pbs.org/" target="_blank" class="image-link">
		<img src="http://i.imgur.com/I3e87e1.jpg" alt="PBS 100%">
		<img src="http://i.imgur.com/R7p7cpo.jpg" alt="PBS 125%">
		<img src="http://i.imgur.com/Uw8L9Xb.jpg" alt="PBS 175%">
	</a>
	<figcaption>
		video.pbs.org at the same resolution, but different font size.
	</figcaption>
</figure>

Finally, _revealing_.

Responsive <a href="http://www.1stwebdesigner.com/design/overview-of-breakpoints-in-responsive-web-design/" target="_blank">breakpoints</a> are typically set at specific _widths_. If a width is defined in ems, then the breakpoint is a relative point. Breakpoints are literally points at which the design breaks and needs to be readjusted. Since design is proportional, the breakpoints should respond to changes in context in order to maintain proportion.

<a href="https://support.google.com/chrome/answer/96810?hl=en" target="_blank">Increasing the browser font size</a> on a design set in ems is like looking at that design under a microscope. The traditional way of testing responsive layouts is to drag the window back and forth to see how the design changes at different widths. If an experience is defined in ems, adjusting the width of the browser is a moot practice. Adjusting the base measure up and down will expose design flaws in a very obvious way. This is a much better way to stretch and examine and refine the experience.

<small class="footnote">Thank you to Ryan Landers and Tim Vonderloh for their peer review.</small>

