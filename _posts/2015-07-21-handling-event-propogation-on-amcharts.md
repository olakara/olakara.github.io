---
layout: post
title:  Handling event propagation on amCharts
date:   2015-07-26
categories: Javascript
tags: JavaScript
---

amCharts is one of the best charting library available for data visualization on web pages. I have been working with it for the past few months and I must say I am pretty impressed with it. The charts I work with have been highly interactive and  recently, I had some requirements where I had to disable the event propagation on certain parts of the chart (specifically the pie chart). My requirement was to keep all existing chart interactions intact but, make the chart clickable ( like focusing on details section or open another page with detail charts).

Like any amCharts, I have a simple DIV representing my chart in HTML:
{% highlight javascript linenos %}
  <div id="chartdiv" onclick="chartClick()"></div>
{% endhighlight %}

Here is what I have:

<a class="jsbin-embed" href="http://jsbin.com/zumuci/1/embed?output">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.34.0"></script>

*[Looks like even with Auto-run JS checked, JSBin does not execute the scripts correctly. You might have to click on 'Run With JS' do see the proper execution! ]*

Clicking on the chart displays my alert box. But what I wanted was to avoid the '*chartClick()*' being called when I click on any of the pie's slice or its legend of the chart. To get the desired results, you need to override a number of methods. You will have to handle clicking of slice, legend marker and legend text separately. First let's handle the legend which is done by overriding '*clickLabel()*' and '*clickMarker()*'. These methods are available as part of '*legend*' configuration. Here is a sample legend configuration object:

{% highlight javascript linenos %}
"legend": {
    "markerType": "circle",
    "position": "right",
    "marginRight": 80,
    "autoMargins": false,
    "clickLabel": function(dataItem, event) {
        if (dataItem.hidden)
            chart.showSlice(dataItem.index);
        else
            chart.hideSlice(dataItem.index);
        event.stopPropagation();
    },
    "clickMarker": function(dataItem, event) {
        if (dataItem.hidden)
            chart.showSlice(dataItem.index);
        else
            chart.hideSlice(dataItem.index);
        event.stopPropagation();
    }
}
{% endhighlight %}

The '*chart*'' is obtained from the '*makeChart()*' method which is used to create the chart. Slice intraction is handled on the chart's main object. Here is an example:

{% highlight javascript linenos %}
"clickSlice": function(dataItem, event) {
    if (dataItem.pulled) {
        chart.pullSlice(dataItem, 0);
    } else {
        chart.pullSlice(dataItem, 1);
    }
    event.stopPropagation();
}
{% endhighlight %}

In the above code, '*pullSlice()*' is not a public method. Unfortunately, I could not find any methods listed in the docs to get the desired behaviour.

Here is the complete sample code I used:

{% highlight javascript linenos %}
var chart = AmCharts.makeChart("chartdiv", {
    "type": "pie",
    "theme": "",
    "dataProvider": [{
        "country": "Lithuania",
        "value": 260
    }, {
        "country": "Ireland",
        "value": 201
    }, {
        "country": "Germany",
        "value": 65
    }, {
        "country": "Australia",
        "value": 39
    }, {
        "country": "UK",
        "value": 19
    }, {
        "country": "Latvia",
        "value": 10
    }],
    "valueField": "value",
    "titleField": "country",
    "depth3D": 15,
    "angle": 45,
    "clickSlice": function(dataItem, event) {

        if (dataItem.pulled) {
            chart.pullSlice(dataItem, 0);
        } else {
            chart.pullSlice(dataItem, 1);
        }
        event.stopPropagation();
    },
    "legend": {
        "markerType": "circle",
        "position": "right",
        "marginRight": 80,
        "autoMargins": false,
        "clickLabel": function(dataItem, event) {

            if (dataItem.hidden)
                chart.showSlice(dataItem.index);
            else
                chart.hideSlice(dataItem.index);

            event.stopPropagation();

        },
        "clickMarker": function(dataItem, event) {
            if (dataItem.hidden)
                chart.showSlice(dataItem.index);
            else
                chart.hideSlice(dataItem.index);
            event.stopPropagation();
        }
    }
});

function chartClick() {
    alert('Clicked on chart.. show details');
}
{% endhighlight %}

Here is what I achieve:

<a class="jsbin-embed" href="http://jsbin.com/zumuci/5/embed?output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.34.1"></script>

*[Looks like even with Auto-run JS checked, JSBin does not execute the scripts correctly. You might have to click on 'Run With JS' do see the proper execution! ]*

:)
