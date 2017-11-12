---
layout: post
title:  Understanding the Node.js event loop
description: understand how node.js works and its event loop, non-blocking I/O and asynchronous operations
date:   2015-10-28
tags: NodeJS
---

Previously, I introduced [Node.js and its architecture](http://abdelraoof.com/blog/2015/10/19/introduction-to-nodejs/). Now, we will try to understand the event loop. We will start with event based programming, cost of I/O & non-blocking I/O and try to understand the event loop concepts and learn how the node.js event loop works.

**Event driven programming**

Event driven programming is a programming paradigm in which the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or messages from other programs/threads. Today, this concept is largely using in GUI Applications wherein a mechanism is in place that listens for events and executes an action once the event occurs. This is the basic principle behind node.js!

**Cost of I/O & Non -Blocking I/O**

What makes node.js so popular and set it apart from other web programming paradigms? In most software systems every system call, like reading or writing a file, querying a database, is blocking. i.e, the program execution will stop and wait for the call to finish and return its result. After that the program execution resumes. This is blocking I/O and synchronous programming. The more your program waits for the result, the more costly it is and this is cost of I/O... One of the core point of Node.js is to reduce this cost (the cost of waiting for I/O).

Current servers like Apache is multi threaded program, i.e.; it spawns a thread per request. When the program execution is stopped (by pending I/O) the thread / process will be put to sleep by the system but it will still consume resources. This is not a concern for single user (or low number of users) systems. But if you have a multi user system with a large number of users you are bound to hit the bottleneck! Each request will have a process or thread to handle them and these might be waiting for an I/O operation to be complete. So, till the task is complete the processes consume CPU and memory making it expensive. Node.js takes a different approach to solve this problem. It serves all the requests from a single thread. The program code running in this thread is still executed synchronously but every time a system call takes place it will be delegated to the event loop along with a callback function. The main thread is not put to sleep and keeps serving other requests. As soon as the previous system call is completed, the event loop will execute the callback passed. This callback will usually deal with the result returned and continue the program flow. Thus, the main program is not blocked by the I/O operations i.e. Non-Blocking I/O and asynchronous programming!

<blockquote>
  Remember: Node.js keeps a single thread for your code. Everything else runs in parallel!
</blockquote>

**The Event Loop**

The event loop gives Node the capability to handle highly concurrent requests while still running "single-threaded". In any event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected. Similarly, the event loop delegates I/O operations via POSIX interface while it still handles new requests and callbacks. Here is my take on how things work inside the node.js server:

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/nodejs/nodejs-event-loop.png" alt="Node.js Event Loop" />

The event loop simply iterate over the event queue which is basically a list of events and callbacks of completed operations. All I/O is performed asynchronously by the threads in the thread pool. Libuv component of Node.js plays a vital part in this. If an item requires an I/O the event loop simple delegates the operation to the thread pool. Event loop continues execution of items in the event queue. Once the I/O operation is complete, the callback is queued for processing.. Event loop executes the callback and provide appropriate results. Since, it's in a loop.. The process simply keeps going.

Next in the Node.js series, we will set up Node.js for development and start building applications.
