---
layout: post
title:  Continuous integration of Firebase with Travis CI
date:   2015-08-09
categories: Firebase Travis
tags: Firebase Travis
featured: true
---

I recently started working on a project and decided to go with Firebase for backend service and hosting it. Along with this new setup, I wanted to have a continuous integration setup so that the whole development cycle is automated and deployments are quick. Since my code repository was on Github, I decided to go [Travis-CI](http://www.travis-ci.org/).

Travis is an open-source hosted, distributed continuous integration service used to build and test projects hosted at GitHub. it's configured by adding a file named .travis.yml to the root directory of the GitHub repository. Even though Travis provides with lots of [deployment providers](http://docs.travis-ci.com/user/deployment/), unfortunately, I couldn't find one for Firebase. But, Travis do support custom providers to be built using the script provider and will be using this to integrate with Firebase.

Travis provides a default build environment and a default set of steps for each programming language. So I will assume you already have a .travis.yml file ready. Custom deployments are done on 'after_success' step. It is run, when 'script' step is complete and successful. Before we write our deployment script, let's have a look at how a Firebase application is deployed from the command line.

Assuming I am in the project directory, I call the deploy command from the command line to get my Firebase application deployed.

{% highlight bash linenos %}
  $firebase deploy
{% endhighlight %}


You will notice that I have to provide my username & password for deployment. The user credentials can also be provided through command line parameters like this:

{% highlight bash linenos %}
  $firebase deploy --email asdf@gmail.com --password MySecretPassword
{% endhighlight %}


We are going to use this method to authenticate ourselves in the Travis deployment script. Travis provides environment variables which are accessible through out a build process. There are multiple ways of defining an environment variable. But I am going to define my variables (user credentials) in [repository settings](http://docs.travis-ci.com/user/environment-variables/#Defining-Variables-in-Repository-Settings).

Here is how my repository settings look like :

   <img class="img-responsive image-center thumbnail" src="{{site.url}}/img/travis/travis-settings.png" alt="Travis Environment Variable Settings" />

The advantage of defining environment variable in repository settings is that the values are hidden from the export line in the logs. You could also encrypt the values and these are explained in the Travis docs. So, here is the final script:

{% highlight yaml linenos %}
after_success:
  firebase deploy --email ${FIREBASE_USERNAME} --password ${FIREBASE_PASSWORD}
{% endhighlight %}

**Note:** firebase tools is installed as a dependency in the 'install' step of my Travis config file. 

On successful deployment, you should see something like this in Travis:

 <img class="img-responsive image-center thumbnail" src="{{site.url}}/img/travis/travis-output.png" alt="Travis Deployment Output" />

Here is how my complete config file looks like: 

{% highlight yaml linenos %}
language: node_js
node_js:
  - "0.10"
script:
  - echo 'Hello Firebase'
install:
  - npm install -g firebase-tools
after_success:
  - firebase deploy --email ${FIREBASE_USERNAME} --password ${FIREBASE_PASSWORD}
{% endhighlight %}

For your reference, you can have a look at the [Github](https://github.com/olakara/HelloFirebase) & [Travis](https://travis-ci.org/olakara/HelloFirebase/) of a sample project. 
