---
layout: post
title:  Cannot Connect to PerformancePoint Service
description: Provides a solution to fix connection issue with Sharepoint PerformancePoint Service
date:   2013-04-20 15:30:00
tags: SharePoint
---

After configuring my PerformancePoint Service on SharePoint 2013. This error hit me when trying to create a new data source from Dashboard Designer.

 <img class="img-responsive image-center thumbnail" src="{{site.url}}/img/pps-issue/pps-issue.png" alt="PerformancePoint Service Issue" />

Here are the steps to make sure you have your PerformancePoint service configured properly.

**1. Make sure you have the PerformancePoint Service and Secure Store Service started.**

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/pps-issue/2.png" alt="PerformancePoint Service Issue" />

You can check this by going to Central Administration | Application Management | Service Applications |Manage services on server

**2. Make sure you have a Secure Store service application running.**

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/pps-issue/3a.png" alt="PerformancePoint Service Issue" />

 You can check this by going to Central Administration | Application Management | Service Applications | Manage service applications.

Ensure that you have configured the service application properly.

**3. Make sure you have a PerformancePoint Service application running.**

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/pps-issue/3b.png" alt="PerformancePoint Service Issue" />

You can check this by going to Central Administration | Application Management | Service Applications | Manage service application.

Ensure that you have configured the service application properly. Click on your performance point service application to take you to the management screen as shown below:

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/pps-issue/4.png" alt="PerformancePoint Service Issue" />

Verify you application setting by selecting PerformancePoint Service Application Settings.

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/pps-issue/5.png" alt="PerformancePoint Service Issue" />

Make sure you have your secure store displayed and you are using your appropriate unattended service account (If you are using the service account, click Change User and reenter the username and password).

**4. And finally check service application associations.**

Go to Central Administration | Application Management | Service Applications | Configure service application associations

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/pps-issue/6.png" alt="PerformancePoint Service Issue" />

Click on default and ensure that your performance point service is selected.

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/pps-issue/7.png" alt="PerformancePoint Service Issue" />


These steps should ensure that you get your PerformancePoint service up and running.
