---
layout: post
title:  Moving to Jekyll!
description: How and Why Jekyll is used for the site. Compare it with Blogger / Wordpress and its Pros and Cons
date:   2014-07-25 10:28:58
tags: Jekyll
---

 Yes, I jumped the bandwagon! I have made the move from Blogger to this site built on Jekyll. For many years, I have kept my blog on Google's free blogging service Blogger.
 Recently, I have had the urge to buy myself a domain, renovate my blog and do some more serious stuff. Unfortunately, this "recent" urge have been 2 to 3 years. Now, I have this new site and blog, I will be retiring [Techno Paper](http://technopaper.blogspot.com) and you will find all new articles here.

##Why Jekyll?

 Jekyll is a simple parsing engine that generates static sites using templates. It is blog-aware and converts Markdown files to pure static pages that can be published to any web server. There are many other static site generators available. You can get a definitive list from [staticsitegenerators.net](http://staticsitegenerators.net/).
 Out of the 200+ generators available Jekyll tops the list at [www.staticgen.com](https://www.staticgen.com/). Now lets have a look at some pros and cons of Jekyll.

 **1. Jekyll is simple!**

  Jekyll is very simple to get started. Install the gem, run install and start the server. Even better, just create a OpenShift application with the Jekyll container and just clone your git repository. Learning how Jelly works is quite easy. I am not a ruby developer but still I was able to get my site up and running :)

 **2. Speed, Security and Static content**

  Jekyll converts your post into static content. This makes it incredibly faster than any CMS blogging platforms you see around. Since the site is static the security is high (There is no backend to hack into) and no need for caching etc. The only way you hack into a Jekyll blog is if you have the password to the server it's hosted and you edit the files.
  Jekyll also produces clean HTML code (If you follow all the best practices). Here is a comparison of HTML from Jekyll and Blogger for the same article. Blogger just produces lot of code for a simple article.

  <img class="img-responsive image-center thumbnail" src="{{site.url}}/img/jekyll/code-compare.png" alt="PerformancePoint Service Issue" />

 **3. No DB, less configuration and failure points**

  To run Jekyll you don't need MySQL or any other database servers running! All you need is your web server's file system. So, you have less point of failures, bottle necks and configuration. You will see Jekyll's configuration is dead simple.

 **4. Full control over content, design and the site**

   Previously, I had all my data stored away with Google somewhere. I had to follow Blogger's templating methodologies (It came with its on restrictions and cons). Now, I have a copy of my site on my laptop. I did my site's design and I am free to built the way I please.
   Apart from this, you have a version control feature for your whole site through Git or any other system you use.

  **5. Liquid Templating system**

  Even though Jekyll sites are static, you are provided with a simple templating system based on [Liquid](http://liquidmarkup.org/). Its easy to grasp and learn even without any experience in Ruby.
  You will find that Jekyll is a "blog-aware" platform and recognizes posts, tags, categories. The templating framework provides you all the features and all you have to do is implement your imagination!

 **6. Author your articles in Markdown**

  Markdown needs no introduction. Developers these days are familiar with mardown as many sites like StackOverflow use it. It provides a minimalist writing system that you use for authoring using any text editor and later convert to HTML.

##Jekyll is not the silver lining

Definitely, not all is perfect in Jekyll camp.. There are many things missing from Jekyll compared to other blogging platforms. The "static content" by itself is a double edged sword! With jekyll you will not have any dynamic pages (You can acheive some dynamic features through Javascript).
Wordpress offers lots of plugins that can make a blogger's life easier. Jekyll even though it supports plugins, the number is far less and hosting service like Github do not support it for security reasons.
Content creation with Markdown can also be challenging at times. If you move away from standard "headers, paragraphs and images" and want to manipulate some styling you will find markdown less favorable compared to WYSIWYG in a CMS.
So, Jekyll is may not be the right solution for all website!

##What have I done?

My urge made me look for CMS solutions other than Blogger. The best bet was Wordpress (for many obvious reasons). But then I came across many developers and githubbers using static sites!! In less than an hour, I was up and running my [development site on OpenShift](http://blog-olakara.rhcloud.com).
I decided to setup my own rules and here it is:

1. Make the site using Jekyll static site generator.
2. Get a domain for myself.
3. Make my own theme for the site.
4. Open source the theme under MIT License.
5. Publish more articles than before (When I was hosting my blog on Blogger).

I have fulfilled most of my promises that I made. It has been fun building the theme and functionality of site from scratch (I am not a Ruby or Liquid expert but I assure you don't have to be one to make a beautiful site).
The theme of is freely [available on Github](https://github.com/olakara/JekyllMetro) for you to use, explore and contribute. I would like to hear your comments about this site and its theme. In coming days, I will me migrating few of my articles from my old blog.
And finally, the Jekyll Metor theme's development is not over yet. I plan to make the home page more "dynamic" and interesting rather than what you see today.

##Resources

Here are a few resources that I found to be helpful when I started Jekyll.

1. Quick start guide [http://jekyllrb.com/docs/quickstart/](http://jekyllrb.com/docs/quickstart/)
2. Go through source code of sites. You can find many sites and their source at [https://github.com/jekyll/jekyll/wiki/Sites](https://github.com/jekyll/jekyll/wiki/Sites)

Franky, the best resoure is going through other's site code. You get to know the best practices with live and working examples!
