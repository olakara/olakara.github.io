---
layout: post
title:  Hiding Series in Ext JS Charts
description: Learn how to hide a series in Ext JS Charts
date:   2010-06-21
tags: ExtJS
---

In the last few posts we saw how to create and handle events in Ext JS charts. We will have a look at some advanced tasks using Ext JS charts. In this post, we will learn how to hide and display a series in a chart.

As usual, I will go with the sales and revenue chart. In our chart we will have two series - Sales and Revenue. We will provide two check boxes to toggle the series' visibility.
Lets begin with the data store (The data store is same as the one used in previous tutorials):

{% highlight javascript linenos %}
var store = new Ext.data.JsonStore({
fields:['month', 'sales','rev'],
  data: [
      {month:'Jan', sales: 2000, rev: 3000},
      {month:'Feb', sales: 1800, rev: 2900},
      {month:'Mar', sales: 1500, rev: 3100},
      .
      .
      .
      {month:'Nov', sales: 2100, rev: 3000},
      {month:'Dec', sales: 2650, rev: 3300}
  ]
});
{% endhighlight %}

The framework does not provide us with APIs for what we are trying to achieve. But before that lets display the chart and the controls without the proposed functionality:

{% highlight javascript linenos %}
new Ext.Panel({
    title: 'Hiding series in ExtJS Charts',
    renderTo: 'container',
    width:600,
    height:300,
    tbar:[{
         xtype:'checkbox',
         boxLabel:'Toggle Sales',
         handler: function() {
                  alert('Hide / Show Sales');
           }
         },{
         xtype:'checkbox',
         boxLabel:'Toggle Revenue',
         handler: function() {
                  alert('Hide / Show Revenue');
           }
         }],
    items: [{
        xtype: 'columnchart',
        id:'myChart',
        store: store,
        xField: 'month',
        extraStyle: {
                  legend: {
                        display: 'right'
                  }
    },
    series: [{
        yField: 'sales',
        displayName: 'Sales'
        },{
        yField: 'rev',
        displayName: 'Revenue'
    }]
  }]
});
{% endhighlight %}

Now we have the chart and the necessary handler methods on the checkbox, let's split the problem into two parts. First is hiding the series in the chart and second is to hide the series name in the legend.

To hide the series, you will have to access the APIs exposed by flash component. The SWF component exposes a method named **setSeriesStylesByIndex** for setting styles for a series. The method has two parameters - index of the series you are about to modify and the config object that will hold the new style.You can pass the following parameters and its values to the config object:

- color
- colors
- size
- alpha
- borderColor
- borderAlpha
- fillColor
- fillAlpha
- lineSize
- lineColor
- lineAlpha
- image
- images
- mode
- connectPoints
- connectDiscontinuousPoints
- discontinuousDashLength
- skin
- visibility

For more details on these attributes, have a look at [YUI documentation](http://developer.yahoo.com/yui/charts/#seriesstyles). Back to our method, it will now look something like this:

{% highlight javascript linenos %}
function setSeriesStylesByIndex(index, styles){
    // Assuming swfObject is an instance of swf available in chart
    swfObject.setSeriesStylesByIndex(index, Ext.encode(styles));
}
{% endhighlight %}

Our next hurdle is how to call this method when clicking on our checkbox. To accomplish our task we will use the override method (static method) available in Ext class.
Here is the final code of our function being injected into chart:

{% highlight javascript linenos %}
Ext.override(Ext.chart.Chart, {
    setSeriesStylesByIndex: function(index, styles){
        this.swf.setSeriesStylesByIndex(index, Ext.encode(styles));
    }
});
{% endhighlight %}

If you execute our project and have a look at the chart rendered you will notice that the series display can be toggled but the legend of the chart is not updated properly. To update the chart's legend, we will update the showInLegend property of the series. Each series can be accessed in a chart using the series array. So, to modify the first first series, we just need to use the array notation to access the series and the showInLegend property. For example:

{% highlight javascript linenos %}
chart.series[0].showInLegend = false;
{% endhighlight %}

By just setting the property will not have any effect on the chart. We will have to update the display by calling the refresh method available with the chart object. Here is how our checkbox event handler look finally:

{% highlight javascript linenos %}
function() {
var chart = Ext.ComponentMgr.get('myChart');
    if(this.checked) {
         // hide the columns (series in chart)
         chart.setSeriesStylesByIndex(0,
                  {connectPoints: false,alpha:0.0});
         // hide the series label in legend
         chart.series[0].showInLegend = false;
    } else {
         chart.setSeriesStylesByIndex(0,
                  {connectPoints: true,alpha:1.0});
         chart.series[0].showInLegend = true;
    }
    // Refresh the chart
    chart.refresh();
}
{% endhighlight %}

You will have to hard-code the appropriate series index so that the correct series properties is modified.The complete code is given below:

{% highlight javascript linenos %}
new Ext.Panel({
    title: 'Hiding series in ExtJS Charts',
    renderTo: 'container',
    width:600,
    height:300,
    tbar:[{
         xtype:'checkbox',
         boxLabel:'Toggle Sales',
         handler: function() {
             var chart = Ext.ComponentMgr.get('myChart');
             if(this.checked) {
                 chart.setSeriesStylesByIndex(0,
                          {connectPoints: false,alpha:0.0});
                 chart.series[0].showInLegend = false;
             } else {
                 chart.setSeriesStylesByIndex(0,
                          {connectPoints: true,alpha:1.0});
                 chart.series[0].showInLegend = true;
             }
             chart.refresh();
         }
    },{
         xtype:'checkbox',
         boxLabel:'Toggle Revenue',
         handler: function() {
             var chart = Ext.ComponentMgr.get('myChart');
             if(this.checked) {
                 chart.setSeriesStylesByIndex(1,
                          {connectPoints: false,alpha:0.0});
                 chart.series[1].showInLegend = false;
             } else {
                 chart.setSeriesStylesByIndex(1,
                          {connectPoints: true,alpha:1.0});
                 chart.series[1].showInLegend = true;
             }
             chart.refresh();
         }
    }],
    items: [{
        xtype: 'columnchart',
        id:'myChart',
        store: store,
        xField: 'month',
        extraStyle: {
             legend: {
                display: 'right'
             }
        },
    series: [{
        yField: 'sales',
        displayName: 'Sales'
    },{
        yField: 'rev',
        displayName: 'Revenue'
    }]
  }]
});
{% endhighlight %}

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/extjs/hideseriescharts.png" alt="Hide series in Ext JS Charts" />

Well, that's all for now. In the coming weeks we will have some more tutorials on chart and finally build a dashboard. We will also have a look at the new touch UI framework introduced recently.
