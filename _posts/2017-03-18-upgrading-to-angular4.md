---
layout: post
title:  Upgarding to Angular 4!
date:   2017-03-18
categories: Angular JavaScript
tags: Angular JavaScript
---

We have Release Candidate 5 released today and Angular 4 is just around the corner. Here is how you can upgarde your existing Angular 2.x application to Angular 4.

You can simply upgrade using the npm commands as follows:

{% highlight bash linenos %}
  npm install @angular/common@next @angular/compiler@next @angular/core@next @angular/forms@next @angular/http@next @angular/platform-browser@next @angular/platform-browser-dynamic@next @angular/platform-server@next @angular/router@next typescript@latest --save -E
{% endhighlight %}

You will also need to upgrade the compiler-cli package in devDependencies:

{% highlight bash linenos %}
 npm install @angular/compiler-cli@next --save-dev -E
{% endhighlight %}


Once done your package.json will look like:

{% highlight javascript linenos %}
"dependencies": {
    "@angular/common": "4.0.0-rc.5",
    "@angular/compiler": "4.0.0-rc.5",
    "@angular/core": "4.0.0-rc.5",
    "@angular/forms": "4.0.0-rc.5",
    "@angular/http": "4.0.0-rc.5",
    "@angular/platform-browser": "4.0.0-rc.5",
    "@angular/platform-browser-dynamic": "4.0.0-rc.5",
    "@angular/platform-server": "4.0.0-rc.5",
    "@angular/router": "4.0.0-rc.5",
    "core-js": "^2.4.1",
    "rxjs": "^5.1.0",
    "typescript": "2.2.1",
    "zone.js": "^0.7.6"
  },
  "devDependencies": {
    "@angular/cli": "1.0.0-rc.2",
    "@angular/compiler-cli": "4.0.0-rc.5",
    "@types/jasmine": "2.5.38",
    "@types/node": "~6.0.60",
    ...
{% endhighlight %}

You could also upgarde by modifiying the package.json file. and then run the npm install command to download the new package.

Happy coding!

:)
