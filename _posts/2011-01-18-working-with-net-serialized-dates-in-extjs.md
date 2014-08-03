---
layout: post
title:  Working with .Net serialized dates in Ext JS
description: Learn how to do handle .Net serialized dates in Sencha Ext JS applications
date:   2011-01-18
tags: ExtJS C#
---

ASP.Net’s JSON serialize encodes DateTime instance as a string. If you return a JSON from a MVC contoller, you will notice your data encoded in the form:

{% highlight javascript linenos %}
\/Date(1295163209177)\/
{% endhighlight %}

This is basically nothing but Jan 16 2011 10:33:29! Ext JS components like data grid, datepicker do not consume this format and needs to be transformed.

####Why does Microsoft serialize DateTime in this form?

One of the major disadvantages of using JSON is its lack of date/time literal. The support for date and time values is provided by the Date object in javascript. So, In order to represent the date and time, there are two options available:
1. To express the data as string
2. To express it in numerical form.

The numeric form would be the the number of milliseconds in Universal Coordinated Time (UTC) since epoch. But in either form, we still have the issue of not being able to identify it as date / time. In order to overcome this, MS came up with encoding DateTime values as string in the form:

{% highlight javascript linenos %}
\/Date(ticks)\/
{% endhighlight %}

####How to fix it in Ext JS?

Deserializing in Ext JS can be done with the help of Date class. You can use the parseDate static method to convert the serialized date into Date object.

{% highlight javascript linenos %}
var dt = Date.parseDate(date,'M$');
dt.format('d/m/y');
{% endhighlight %}

The deserialized dates can be displayed in any desired format in your Ext JS scripts! :)
