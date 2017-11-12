---
layout: post
title:  Getting started with Node.js development
description: get stated with Node.js development. Learn Node.js REPL Terminal, Simple CLI Application and build a web server.
date:   2015-11-04
tags: NodeJS
---

In previous articles, we discussed about the internals of Node.js. In this article, we are going to discuss how to install Node.js and start programming. We will try our hands on running JavaScript interactively, then build small applications using Node.js. Along the way I will introduce you to few important concepts of Node.js programming. But first let's setup the environment.

**Installing Node.js**

Let’s get started by setting up one development environment. If you haven’t installed Node.js already, you should head to nodejs.org and download the pre-built installers available for your platform. Installation is simple but if you need help follow the [installation instructions on How to Node](https://www.guru99.com/download-install-node-js.html). If you don’t have administrator rights on your PC to install from installers, check out [my instructions]( http://abdelraoof.com/blog/2014/11/11/install-nodejs-without-admin-rights/) to install without administrator privileges and configure Node.js to work in corporate environments.

Now that Node we have node installed let's confirm it’s properly installed and we can run it. Open a command line and run the following command:

{% highlight bash linenos %}
  C:\Users\Abdel> node --version
{% endhighlight %}

It should display the version number you installed. Something like this:

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/nodejs/node-version.png" alt="Node.js version" />

Remember, node.js is not just a server or application; It’s a runtime. Node.js provides an interactive interface for developer to try out JavaScript. Let’s have a deeper look at this.

**REPL Terminal**

REPL (Read-Eval-Print-Loop) is an interface where you can interactively run JavaScript and see the results. It can be used for simply trying out some JavaScript code and getting its results instantly. You can access REPL by simply running node without any arguments. To invoke REPL interface, run the node.exe or nor simply node!

{% highlight bash linenos %}
  C:\Users\Abdel> node
{% endhighlight %}

Now you will enter the REPL interface where you can type any Node.js command. The interface will take any JavaScript expression, evaluate it and provide its result. Let’s start with simple math expression:

<div class="row">
<div class="col-md-6">
{% highlight bash linenos %}
 > 2+2
 4
 > 1+5
 6
{% endhighlight %}
</div>
<div class="col-md-6">
  <img class="img-responsive image-center thumbnail" src="{{site.url}}/img/nodejs/node-repl-math.png" alt="Node.js REPL example" />
</div>
</div>

You could also make use of variable to store values like:

<div class="row">
<div class="col-md-6">
{% highlight bash linenos %}
> x = 5
5
> x+2
7
{% endhighlight %}
</div>
<div class="col-md-6">
  <img class="img-responsive image-center thumbnail" src="{{site.url}}/img/nodejs/node-repl-math2.png" alt="Node.js REPL Math example " />
</div>
</div>

You could also use other JavaScript object and their methods for example:

<div class="row">
<div class="col-md-6">
{% highlight bash linenos %}
> Math.random()
0.7993805794976652
> console.log(‘Hello World’)
Hello World
undefined
{% endhighlight %}
</div>
<div class="col-md-6">
  <img class="img-responsive image-center thumbnail" src="{{site.url}}/img/nodejs/node-repl2.png" alt="Node.js REPL Terminal example 2 " />
</div>
</div>


You will notice that when node executes the console.log statement along with the string it displays "undefined". This is actually the return value of the method executed. You can make use of underscore to get the result of last run command.  
Here is the list of commands and shortcuts you can use while working on REPL:

<table class="table table-bordered table-striped table-hover">
    <thead>
      <tr>
        <th>Command</th>
        <th>Explanation</th>        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>.break</td>
        <td>Helps you to exit from multiline expression</td>
      </tr>
      <tr>
        <td>.clear</td>
        <td>Is an Alias for .break</td>
      </tr>
      <tr>
        <td>.exit</td>
        <td>Exit from REPL</td>
      </tr>
      <tr>
        <td>.help</td>
        <td>Shows REPL options and commands</td>
      </tr>
      <tr>
        <td>.load</td>
        <td>Load JS from a file into the REPL session</td>
      </tr>
      <tr>
        <td>.save</td>
        <td>Save all evaluated command in this REPL session</td>
      </tr>
      <tr>
        <td>Ctrl + d</td>
        <td>Terminate the REPL Terminal</td>
      </tr>
      <tr>
        <td>Up / Down keys</td>
        <td>Iterate through command history</td>
      </tr>
      <tr>
        <td>Tab</td>
        <td>Display list of current available commands</td>
      </tr>
    </tbody>
  </table>

**The "Hello World" application**

Even though we did some programming with REPL, let’s make a plain and simple console application that prints the words "Hello World" to the terminal. Simply open a file (hello.js) on any text editing tool and code the following:

{% highlight javascript linenos %}
  console.log(“Hello World”);
{% endhighlight %}

You can run this by the following command:

{% highlight javascript linenos %}
  C:\Users\Abdel> node hello.js
{% endhighlight %}

Node.js is a great platform for creating small command line utilities. You will find many such utility applications like gulp, grunt, etc. that help developers. This is because Node.js gives you a powerful programming platform and with the help of tools like npm developers can share their tools with each other.  

**Node.js Programming Concepts**

Before we move further into programming, we shall look into some important concepts that a new developer should understand. Node.js programming is slightly tricky due to the asynchronous behavior involved. At first most people find it hard to grasp but nevertheless it’s an interesting concept to programming. We will discuss about **Callbacks** and **Modules**.

**Callbacks**

If you have worked with JavaScript you should have already come across callbacks. You must be familiar with this sample code:

{% highlight javascript linenos %}
window.setTimeout(function() {
  alert('A delayed alert box!');
}, 2000);
{% endhighlight %}

The anonymous function is a callback function which is called after a timeout of 2 seconds. When you look at Node.js API's you will notice that most of the functions have callbacks (There are synchronous function calls as well) to make way for asynchronous programming. In fact Node.js uses a callback concept called  "error-first callbacks" wherein the first argument of the callback is always an error object. The following arguments will contain any data that should be returned to the callback. If an error occurs during the operation, the error object is populated otherwise it's set to null.

Here is an example of error-first callback:

{% highlight javascript linesnos %}
fs.readFile('test.txt', function(error, data) {  
  console.log(error,data);
});
{% endhighlight %}

In the above piece of code, readFile is used to read contents of a file asynchronously and call the callback after doing so. If things goes well, you will see null followed by the file content. If any error occurs you will the error object populated and data undefined.  

<blockquote>
  Remember: When you have a task that could take a long time to execute, you should always ensure that you're dealing with it in a non-blocking way.
</blockquote>

**Modules**

Just like authors divide a book into chapters, JavaScript divide program into clusters of code that are called modules. Node.js Modules simply extends the module concept of CommonJS. It provides a simple module loading system by which a developer can load a JavaScript library and use it in his program.  

Modules in Node.js is also responsible for the quick proliferation of freely available and distributable modules (along with the Node Package Manager tool). Developers can easily create and publish a Node.js module making it highly reusable to others.

Node.js has a simple module loading system. You can simple load a module by require-ing it.  Here is an example:

{% highlight javascript linenos %}
var http = require('http');
{% endhighlight %}

By this statement I instruct Node.js that I require the HTTP module and will be using it in my program. Internally, Node.js loads http.js ( js file extension is optional) by using a searching algorithm that helps it to  locate the requested source code. First, Node.js looks to see if the given module is a core module (In our case it is!). But if the given module is not part of the core modules, Node.js will then begin to search for a directory named, "node_modules". It will start in the current directory and then traverse its way up the folder hierarchy, checking each level for a node_modules folder. At each level of node_modules folder it will then attempt to load the given module either as a (.js) JavaScript file or as a named sub-directory. In case of sub-directory, It looks for either a util.js, index.js or package.json file.

For Now, this is just the introduction to Node.js Modules. We will visit it again in near future.

**Creating a web server**

Now let's make use of the newly acquired knowledge to built a simple web server. Here is how a simple 'Hello World' printing web server looks like:

{% highlight javascript linenos %}
var http = require('http');
var server = http.createServer();
server.listen(8080);

server.on('listening', function() {
  console.log('listening to port 8080 for connections ... ');
});

server.on('request', function( request, response) {
  response.end('Hello World');
});
{% endhighlight %}

Unfortunately, it doesn't server anything other than the message "Hello World". Let's use some of the Node.js core modules to built a webserver that really does serve files. Here is the final code:

{% highlight javascript linenos %}
var http = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');


var server = http.createServer();
server.listen(8080);

server.on('listening', function() {
  console.log('listening to port 8080 for connections ... ');
});

server.on('request', function( request, response) {
  console.log('got request for', request.url);
  var reqUrl = url.parse(request.url).pathname;   
  if(reqUrl.charAt(reqUrl.length-1) == '/')
    reqUrl = reqUrl + 'index.html';
  var filePath = path.join(process.cwd(),reqUrl);   

  fs.readFile(filePath,function(error, data){
    if (error) {
      response.writeHead(404);
      response.end();
    }
    response.writeHead(200);
    response.end(data);
  });   
});
{% endhighlight %}

Surely, you could improve this to be much more robust and provide functionalities available in other web servers.

**Wrapping up!**

Node.js have a lot to offer and I hope these articles help you get started. In the next article we will discuss about different Node.js frameworks.
