---
layout: post
title:  Creating a simple Border Layout in Ext JS
description: Learn how to create a simple border layout in Sencha Ext JS
date:   2010-12-20
tags: ExtJS
---

At times, building a simple thing can become tedious. Especially when you miss simple configurations that make huge impact! This is a back to basics article on how to code a simple border layout in an ExtJS panel.

Let’s make a simple panel with a border layout:

{% highlight javascript linenos %}
var panel = new Ext.Panel({
 renderTo: document.body,
            title: 'Border Layout',
            layout: 'border',
            width:700,
            height:400,
            items: [{
                region: 'north',
                layout: 'fit',
                frame: true,
                html: 'This is North!',
                height: 150

             },{
                region: 'west',
                layout: 'fit',
                frame: true,
                border: false,
                html: 'This is West!',
                width: 200,
            }, {
                region: 'center',
                layout: 'fit',
                frame: true,
                width: 400,
                html: 'This is Center!',
                border: false
             }, {
                region: 'east',
                layout: 'fit',
                frame: true,
                border: false,
                html: 'This is East!',
                width: 200
            },{
                region: 'south',
                layout: 'fit',
                frame: true,
                html: 'This is South!',
                height: 150

             }]
});
{% endhighlight %}

There are few points to remember when working with border layout. I have listed few important points:
- When you use border layout, you should always have width and height of the panel defined. If these are not defined, the panel is not displayed properly.
- North & South region must have height information for proper display.
- East & West region must have width information for proper display.
- Center region is a must for the border layout.

Here is the screen shot of our simple panel:

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/extjs/borderlayout.png" alt="Simple Border layout example" />

Share your tips with me and keep coding :)
