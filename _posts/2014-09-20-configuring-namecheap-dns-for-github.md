---
layout: post
title:  Configuring Namecheap DNS for Github pages
description: Learn how to configure Namecheap DNS for Github pages
date:   2014-09-20
tags: Github
---

I thought setup up my DNS entries to point my new domain (abdelraoof.com) to my Github would be as simple.  After making sure my Github pages was running at olakara.github.com, I had quite a drama with Namecheap DNS!!
And didn't go as I planned. To start with Namecheap support was not as I expected it to be. But keeping these aside, here is how you can configure the Namesheap DNS for Github pages if you are trying to do so.

###Prerequisite

Before you start with Namecheap, you have to make sure you have completed the Github procedures for setting up a custom domain. Github explains it on their [Github Help](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages).
You need to make sure you have a file named CNAME with your domain name in it. If you are very new to this, you might want to have a look at [this guide](https://help.github.com/articles/adding-a-cname-file-to-your-repository). Here is how my CNAME file looks like:

 <img class="img-responsive image-center thumbnail" src="{{site.url}}/img/github/github-cname.png" alt="CNAME file on Github" />

You might also want to read [this](https://help.github.com/articles/tips-for-configuring-an-a-record-with-your-dns-provider) to get a better understanding of what we are going to do next.

###Configuring Namesheap

Once you have the CNAME file in place you need to login into your Namecheap account and select the appropriate domain name from the list of domains you own.

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/github/github-domains.png" alt="Domain listing on Namecheap account" />

Next, select **All Host Records** under **Host Management** from the left navigation.
<img class="img-responsive pull-right thumbnail " style="margin-left:10px" src="{{site.url}}/img/github/github-menu.png" alt="Domain listing on Namecheap account" />
Now you are presented with crazy table, which did confuse me!! But here is what you have to do to get things rolling...

Set the HOSTNAME @'s **IP ADDRESS/URL** to **192.30.252.153**. Make sure you select the RECORD TYPE  as **A (Address)**. You may leave the default values for TTL which is 1800.
Next set the www IP ADDRESS/URL to your github pages ie; **username.github.io** (In my case it was olakara.github.io). Don't forget to add a period at the end. Select the RECORD TYPE as **CNAME (Alias)**. Here also, you may leave the TTL with its default value of 1800.

In SUB-DOMAIN SETTINGS you need to add an entry similar to the first one. In the first column (ie HOSTNAME) you will enter @. In IP ADDRESS/URL you will provide **192.30.252.154** (Note, In the first record you entered 192.30.252.153) and set TTL to 1800.

Now, If you want to www.yourdomain.com to redirect to yourdomain.com, you will need to another entry. In this case, provide www as your HOSTNAME.
Here is how your configurations will look like in the end:

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/github/namecheap-configurations.png" alt="Completed configurations on Namecheap account" />

Save your settings and you will need to wait for DNS changes to take effect!
