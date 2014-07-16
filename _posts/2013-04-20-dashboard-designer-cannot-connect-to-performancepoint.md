---
layout: post
title:  Cannot Connect to PerformancePoint Service
date:   2013-04-20 15:30:00
categories: SharePoint
tags: SharePoint Designer
---

After configuring my PerformancePoint Service on SharePoint 2013. This error hit me when trying to create a new data source from Dashboard Designer.
![][1]

Here are the steps to make sure you have your PerformancePoint service configured properly.

1. **Make sure you have the PerformancePoint Service and Secure Store Service started.**

![][2]
You can check this by going to Central Administration | Application Management | Service Applications |Manage services on server

2. **Make sure you have a Secure Store service application running.**

![][3]
 You can check this by going to Central Administration | Application Management | Service Applications | Manage service applications.

Ensure that you have configured the service application properly.

3. **Make sure you have a PerformancePoint Service application running **

![][4]
You can check this by going to Central Administration | Application Management | Service Applications | Manage service application.

Ensure that you have configured the service application properly. Click on your performance point service application to take you to the management screen as shown below: ![][5]
Verify you application setting by selecting PerformancePoint Service Application Settings.
![][6]
Make sure you have your secure store displayed and you are using your appropriate unattended service account (If you are using the service account, click Change User and reenter the username and password).

4. **And finally check service application associations.**

Go to Central Administration | Application Management | Service Applications | Configure service application associations
![][7]
Click on default and ensure that your performance point service is selected.

![][8]


These steps should ensure that you get your PerformancePoint service up and running.

[1]: http://2.bp.blogspot.com/-6maOOSSoHNg/UXJGEFfBvcI/AAAAAAAABUU/bclX0nLNqIs/s400/pps-issue.png
[2]: http://3.bp.blogspot.com/-Hoi6yy2jmG0/UXJIc5MATFI/AAAAAAAABUc/yQJKVlYTSxQ/s400/2.png
[3]: http://1.bp.blogspot.com/-fq9hZYk6sds/UXJJQs2c5HI/AAAAAAAABUs/d3BGxS7nQtQ/s400/3a.png
[4]: http://2.bp.blogspot.com/-CoDKRrC9Gto/UXJQl88svVI/AAAAAAAABU8/4Hibl0GDYig/s320/3b.png
[5]: http://1.bp.blogspot.com/-pks2prYl6tw/UXJQ6T_YbnI/AAAAAAAABVE/e0uAZa6L3_s/s320/4.png
[6]: http://1.bp.blogspot.com/-MLZ8k9P4wvU/UXJRcuM5QpI/AAAAAAAABVM/wbOsP8Bqyeg/s320/5.png
[7]: http://4.bp.blogspot.com/-2Nb7jMeoKmw/UXJRt4ZAekI/AAAAAAAABVU/_bQ6ksFVEsQ/s320/6.png
[8]: http://1.bp.blogspot.com/-MnzP7DRShCw/UXJR3FC8S8I/AAAAAAAABVc/SGEoaw5ttZo/s320/7.png