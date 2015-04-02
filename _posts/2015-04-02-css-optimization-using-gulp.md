---
layout: post
title:  CSS optimization using Gulp
date:   2015-04-02 
categories: Gulp
tags: Gulp CSS JavaScript
---

Today's web pages should be lean, fast and responsive. At the same time code should be readable and maintainable which can be quite challenging. To keep the pages lean and fast you need to optimize your HTML, CSS and JavaScript. Optimizing CSS would not just mean minifying the CSS, but it will include writing optimized styles (using shorthand properties),removing unused styles and finally minifying.

Gulp the streaming build system provides some of the best plugins for optimization and making sure the code stays readable and developer friendly. I have been using few plugins which I would like to mention:

**1. [gulp-shorthand](https://www.npmjs.com/package/gulp-shorthand) :** Makes your CSS files lighter and more readable. It takes something like this:
{% highlight css linenos %}
body {
    background-image: url('smiley.gif');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
}
{% endhighlight %}
gulp-shorthand converts this into CSS shorthand:
{% highlight css linenos %}
body {
  background: url('smiley.gif') no-repeat fixed center;
}
{% endhighlight %}
The first CSS code is more readable and surely keeps developers happy, but it's not optimized.The converted code is more optimized and browser friendly. Here is how the Gulp task look like:
{% highlight javascript linenos %}
var cssShorthand = require('gulp-shorthand');
.
.
gulp.task('cssShort', function(){
    return gulp.src('main.css')
        .pipe(cssShorthand())
        .pipe(gulp.dest('./build/css'));
});
{% endhighlight %}

**2. [gulp-more-css](https://www.npmjs.com/package/gulp-more-css) :** Minifying CSS is also a major step in CSS optimization. You will find many gulp plugins for minification. [Here](http://goalsmashers.github.io/css-minification-benchmark/) is the benchmarks of popular once. more-css seems to be one of the best. You may also use the popular [gulp-minify-css](https://www.npmjs.com/package/gulp-clean-css). Have a look at sample gulpfile:
{% highlight javascript linenos %}
gulp.task('css', function(){
    return gulp.src('main.css')
        .pipe(cssShorthand())
        .pipe(cssMinify())
        .pipe(gulp.dest('./build/css'));
});
{% endhighlight %}

**3. [gulp-csslint](https://www.npmjs.com/package/gulp-csslint) :** CSSLint is a tool to help point out problems with your CSS code. The gulp plugin helps you validate your CSS code .

We have looked at validating,optimizing and minifying CSS code. How about further optimization by identifying and removing un-used CSS from our source files?

**4. [gulp-uncss](https://www.npmjs.com/package/gulp-uncss) :**  This gulp plugin helps you remove unused CSS selectors. Unused CSS is a particular problem when working with a heavy modern UI framework such as Twitter Bootstrap, Zurb Foundation etc. Here is how I'm using the plugin:
{% highlight javascript linenos %}
gulp.task('css', function() {
    return gulp.src('main.css')
        .pipe(uncss({
            html: ['index.html', 'views/**/*.html', 'components/**/*.html']
        }))
        .pipe(cssShorthand())
        .pipe(cssMinify())
        .pipe(gulp.dest('./build/css'));
});
{% endhighlight %}

I’ve put together this set of gulp plugins during my discovery of the Gulp tool. These might not be the best ones out there. If you think something else is better and can help optimize, do join the discussion by commenting below. 

:)
