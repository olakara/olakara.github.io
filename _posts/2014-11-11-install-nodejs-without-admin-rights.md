---
layout: post
title:  How to install Node.js without admin rights
description: How to install Node.js and NPM without admin rights on a windows PC for development
date:   2014-11-11 10:28:58
tags: NodeJS
---

Node.js does provide pre-built installers for all platforms but here we are going to talk about how to install and prep your PC for Node.js development when you don't have administrator rights.

**Step 1: Get Node.exe**
First you will need to download the Windows Binary. You can get it from [Node.js download page](http://nodejs.org/download/) or [http://nodejs.org/dist/latest/](http://nodejs.org/dist/latest/). For x64, you will have to download from the appropriate folder. Move the executable to a local folder.

**Step 2: Get NPM**
NPM (Node Package Manager) is the package manager for Node.js and you will need this for your development. You can download NPM from [ https://github.com/npm/npm/releases](https://github.com/npm/npm/releases) and extract the zip file to a local folder.

**Step 3: Configure the environment PATH variable.**
You need to set up the PATH variable so that you can call node from anywhere in the system.
{% highlight bash %}
set PATH=%PATH%;D:\path-to-your-node;D:\path-to-your-npm
{% endhighlight %}
Mostly likely, the usual way of setting environment variables may not be accessible or not sufficient for you. instead you might want to  hit Win + R (Open the Run dialog) and execute this:
{% highlight bash %}
rundll32 sysdm.cpl,EditEnvironmentVariables
{% endhighlight %}
This command will provide you with Environment Variables dialog box. You will be able to add/modify the PATH variable for the current user.
<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/nodejs/environment.png" alt="Environment Variables dialog box" />

**Step 4: Testing your Node.js installation**
Quick way to test your Node.js installation is to get the version of Node.js that you are running by running the following command:
{% highlight bash %}
node --version
{% endhighlight %}
You should get something like this:
<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/nodejs/nodejs-version.png" alt="Testing Nodejs installation" />

**Extra: Setting up NPM to work behind a proxy**
Apart from the hurdle of not having admin rights, one common issue is working behind the corporate proxy. Fire up your command line and type in the following:
{% highlight bash %}
npm config set proxy http://proxy:port
npm config set https-proxy https://proxy:port
{% endhighlight %}

If you need to specify the credentials, then use the following syntax:

{% highlight bash %}
npm config set proxy http://username:password@proxy:port
npm config set https-proxy https://username:password@proxy:port
{% endhighlight %}

Now you can get your hands dirty with Node.js. Happy programming! :)
