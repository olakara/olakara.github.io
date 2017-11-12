---
layout: post
title:  Introduction to Node.js
description: Get introduced to Node.js and its architecture
date:   2015-10-19
tags: NodeJS
---

The popularity of JavaScript have skyrocketed in recent years and inevitably the Node.js and its ecosystem have played an important role. In last few years JavaScript has shown its strengths and have proved to be a major player in not just web development; even in IoT. In the next few weeks I am planning to publish few articles on Node.js and this is first of the series.

The Node.js website defines it as:

<blockquote>
  "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient."
</blockquote>


Wikipedia defines it as:


<blockquote>
 "Node.js is an open-source, cross-platform runtime environment for developing server-side web applications."
</blockquote>

I would define it as:

<blockquote>
  "Node.js is an open source, event-driven, cross-platform runtime environment for building server side and networking applications using JavaScript"
</blockquote>

Node.js provides an event-driven, non-blocking I/O API for developers to take advantage of. All applications are written in JavaScript and the cross-platform runtime executes it.

**How did Node.js come into being?**

Node.js is the brainchild of Ryan Dahl. He was inspired by a flikr file upload demo which displayed the progress of the file being uploaded. Doing this on a larger scale was difficult during those days because someone uploading a particular file that could be going on for several minutes at the same time and you have this extra request coming in that needs a response concurrently.

In Rayn’s own words:

<blockquote>
 "Turns out, a lot of the frameworks were designed in a way that they made the assumption a request — response is something that happens instantaneously and that your entire web development experience should be abstracted as a function. You get a request, you return a response. That is the extent of your context."
</blockquote>

This led to the using non-blocking sockets and pairing it with JavaScript to create Node.js. The project was demonstrated at the inaugural European JSConf on November 8, 2009.

**Architecture of Node.js**

Shown below is my take on the full stack architecture of node.js and looking at the current version 4.2.1.

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/nodejs/nodejs-arch.png" alt="Node.js Architecture" />

On the top, we have Node.js API which are core APIs provided out of the box by Node.js. This is written in Javascript and is directly exposed to the developer to call from his Node.js applications. Below the Core API, we have the bindings that really bind the JavaScript with C / C++ libraries. Node.js also provides Addons which are dynamically linked shared objects. They provide glue to C/C++ libraries. This means that you can take pretty much any C/C++ library and create an addon that will allow you to use it in Node.js.

Below this, we have native libraries built in C / C++:

**V8:** It is Google’s open source JavaScript engine built for Google Chrome. It’s written in C++ and can run either standalone or embedded into any C++ application. It basically compiles JavaScript code to native machine code instead of using an interpreter. If you would like to know more on how V8 works, refer to [this article] (http://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/).

**libuv:** It is a multi-platform support library with a focus on asynchronous I/O. Initialy, Node.js started using libuv as an abstraction layer for libev and libio, but recently libuv have become more powerful and have replaced underlying libraries to become multi-platform. When V8 handle the execution of Javascript, libuv handles the event loop and async I/O operations. Together they form the power house of Node.js.

Here are featuers of libuv:

- Full-featured event loop backed by epoll, kqueue, IOCP, event ports.
- Asynchronous TCP and UDP sockets
- Asynchronous DNS resolution
- Asynchronous file and file system operations
- File system events
- ANSI escape code controlled TTY
- IPC with socket sharing, using Unix domain sockets or named pipes (Windows)
- Child processes
- Thread pool
- Signal handling
- High resolution clock
- Threading and synchronization primitives

If you plan to dive deep into this library, refer to this [online book](http://nikhilm.github.io/uvbook/).

**c-ares:** It’s a C library for asynchronous DNS request including name resolves. It is intended for applications which need to perform DNS queries without blocking, or need to perform multiple DNS queries in parallel.

**http_parser:** Is a HTTP request and response parser written in C. It does not make any syscalls nor allocations, it does not buffer data, and can be interrupted at anytime. It main features include:

- No dependencies
- Handles persistent streams (keep-alive).
- Decodes chunked encoding.
- Upgrade support
- Defends against buffer overflow attacks.

**OpenSSL:** Is an open source implementation of Secure Sockets Layer (SSL v2/v3) and Transport Layer Security (TLS v1)  protocols as well as a full-strength general purpose cryptography library. It is based on SSLeay library and built using C. It provides all the necessary cryptography methods like hash, hmac, cipher, decipher, sign and verify methods.

**Zlib:** Is a general purpose data compression library written in C.

**Pros & Cons of Node.js**

First let’s discuss few pros of using Node.js:

-	A major benefit of Node.js is Asynchronous I/O which is a good match to common web and network driven applications. Node.js is able to scale to large volume of clients because I/O tasks are handled asynchronously.
-	Node.js is built on JavaScript and you will use the same language on the backend and frontend. There is no technology switching involved and you may share same code / library with both server and client.
-	It’s easy to start with! Unlike other stacks be it .Net, LAMP or what-ever as a developer you don’t have to go through knowing a separate server product (IIS, Apache etc) and how to deploy to them and other nitty-gritty things involved. Node.js comes with the server the necessary tools that makes development and deployment swift and easy.
-	Active and vibrant community that shares lots of code on public repositories like github. The npm community is very rich and growing at a fast pace. This provides lots of ready to use modules.

Now, moving on to the cons:

-	Number one disadvantage would be using Node.js for CPU-intensive tasks like generated report, analytics etc.
-	Using the event driven methodology without proper knowledge might lead to  bad code in the applications ( callback hell etc)
-	Node.js is a “teenager”! Even though most of the core libraries have reached stability, you will still find few still in experimental state. Surely this disadvantage will move away as Node.js matures.


So, what type of applications are suitable to be built with Node.js? Applications like the involve / require fast file uploads, real-time data, web socket servers, data streaming etc.. In short, Node is a great option for applications that wait on I/O and have to handle a lot of concurrent connections.

Next in the Node.js series, we will try to [understand node.js event loop](http://abdelraoof.com/blog/2015/10/28/understanding-nodejs-event-loop).
