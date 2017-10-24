---
layout: post
title:  Fixing 'Permission Denied (publickey)' when pushing to Github
date:   2017-10-24
categories: Github
tags: Github
---

Honestly, I am not a regular Githuber! But every now and then I have spike of activity and then I disappear (This is not my indent when I start a repo). I frequently face the 'Permission Denied (publickey)' when I start pushing some code into my new repos. 

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/github/git-permission-denied-error.png" alt="Git permission denied error when pushing" />

This means that, you do not have a SSH key on your local machine associated with your account. Either the key was removed or you haven't made any. So, the solution is to create a new SSH key and associate it so that your machine is authorized to push code into the repo. Here's how to fix it: 

**Step 1: Check if you have a SSH key**

From your home folder, cd to .ssh folder (Usually C:\Users\<UserName>\.ssh on Windows). Check if you have two files named: *id_rsa* and *id_rsa.pub*. These files constitute your public and private keys used to identify yourself with a SSH server (In this case Github). Remember your keys must be named *id_rsa* and *id_rsa.pub* in order to communicate with Github.  
*id_rsa.pub* contains your public key that you will share with the Github server. 

**Step 2: Create new SSH keys if they don't exists**

If you don't have the key, you need to create a new pair. A SSH key pair can be created using the *ssh-keygen* command. Here is an example: 


{% highlight bash %}
ssh-keygen.exe -t rsa -C your-email-for-github@domain.com
{% endhighlight %}

And here is how the output looks like:

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/github/ssh-keygen.png" alt="Create a SSH key pair using ssh-keygen command" />

This will create both *id_rsa* and *id_rsa.pub* files. 

**Step 3: Configure your public key on Github**

Get your public key by opening id_rsa.pub in any text editor. Copy its contents and paste it into Github Settings > SSH and GPG Keys.

Now you have a SSH key configured on Github. This should solve your Permission Denied error and enable you to push code into your repo! 

**Bonus!**

Here is how you can test your SSH key before you execute the push command. Issue the following command:

{% highlight bash %}
ssh -T git@github.com
{% endhighlight %}

And here is how the output looks like if everything is fine:

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/github/ssh-test.png" alt="Testing new SSH configuration" />

Happy coding :) 