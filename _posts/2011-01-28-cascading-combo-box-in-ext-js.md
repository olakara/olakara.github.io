---
layout: post
title:  Cascading Combo box in Ext JS
description: Learn how to do implementing cascading combo box in Sencha Ext JS
date:   2011-01-28
tags: ExtJS
---
This week, two readers had approached me with questions on cascaded loading of combo box in ExtJS. Rather than replying them with mails, I decided to put it up for on the blog so other readers can also get it. In this tutorial I will explain how to cascade the loading of combo box options.

Cascading combo box can help in avoiding huge combo boxes. You can provide the user with a drill down of options that you offer and this helps them narrow down the options to select. When you have large data to display, it would be better to avoid combo boxes and go for a list view.

For now, let’s take a simple form where the user is asked to select geographical location & language. The selection of city is made by selecting country and region. So, we have three combo box:
- To select region (Continent)
- To select country
- To select city

User does a drilldown on these three combos to finally select the city. First the user selects the continent. Selection triggers loading of all the countries in that continent. And similarly selection of country will trigger the loading of cities of that country.

Now, let’s get our hands dirty with the code. We will have a data store for each of the comobo boxes. In this tutorial, we will use Json store. You should be able to use any other store Ext JS library provide. Let me introduce the store for holding continents:

{% highlight javascript linenos %}
var mainStore = new Ext.data.JsonStore({
    autoLoad: true,
    url: '/GetContient',
    fields: ['item','value']
});
{% endhighlight %}

The store is very simple and straight forward. We set three properties of the json store. Unlike other dropdowns, the continent is starting point of our cascading. In order to load it along with the form, we will use autoLoad property of the stores. You need to define the url from which the store will be loaded & the fields array provides information on the fields.

The other two stores are slightly different. They will be loaded through selection of the respective drop downs. So, they are not initially loaded with values. Here are the stores for country and city:

{% highlight javascript linenos %}
var countryStore = new Ext.data.JsonStore({
    autoLoad: false,
    pruneModifiedRecords: true,
    url: '/GetCountry',
    fields: ['item', 'value']
});

var cityStore = new Ext.data.JsonStore({
    autoLoad: false,
    pruneModifiedRecords: true,
    url: '/GetCity',
    fields: ['item', 'value']
});
{% endhighlight %}

We have set pruneModifiedRecords property inorder to clear records each time the store is loaded. Now we have our stores ready. Let’s code our form and its fields.

Apart from the three drop downs, I will have a text field for keying in the language. We will render the directly onto the HTML document’s body tag. So, here is the code:

{% highlight javascript linenos %}
var Example = new Ext.Panel({
    title: 'Example of Cascading combos',
    renderTo: document.body,
    width: 400,
    frame: true,
    items: [{
        xtype: 'form',
        url: '/FormSubmitURL',
        id: 'ex-form',
        method: 'post',
        defaults: {
            anchor: '95%'
        },
        items: [{
            xtype: 'combo',
            fieldLabel: 'Continent',
     emptyText: 'Select a Continent',
            store: mainStore,
            editable: false,
            allowBlank: false,
            forceSelection: true,
            valueField: 'value',
            displayField: 'item',
            triggerAction: 'all',
            hiddenName: 'continent',
            id: 'continent',
  listeners: {
          'select' : function(field,nval,oval) {
    countryStore.load({
                      params: {'id': nval.data.value }
             });
    }
   }
        }, {
   xtype: 'combo',
            fieldLabel: 'Country',
   emptyText: 'Select a Country',
            store: countryStore,
   mode: 'local',
            editable: false,
            allowBlank: false,
            forceSelection: true,
            valueField: 'value',
            displayField: 'item',
            triggerAction: 'all',
            hiddenName: 'country',
            id: 'country',
   listeners: {
    'select' : function(field,nval,oval) {
     cityStore.load({
                params: {'id': nval.data.value }
             });
    }
   }
  },{
   xtype: 'combo',
            fieldLabel: 'City',
   emptyText: 'Select a City',
            store: cityStore,
   mode: 'local',
            editable: false,
            allowBlank: false,
            forceSelection: true,
            valueField: 'value',
            displayField: 'item',
            triggerAction: 'all',
            hiddenName: 'city',
            id: 'city'
  },{
   xtype: 'textfield',
            fieldLabel: 'Language',
            name: 'language',
            id: 'language'
        }],
        buttons: [{
            text: 'Submit',
            handler: function() {
    alert('Submit the form');
   }
        }]
    }]
});
{% endhighlight %}

Now, lets focus on one of the combo boxes. Notice how we cascade the loading of the combo boxes using the select event. The select event callback function provides us with all the information we need. It has three parameters and they are:
1. The combo box
2. The newly selected field record
3. Numerical index value of old selection

From the callback’s parameters, we get the new selection information, which is used to load the country or city data store using the load method.

You can [download the Javascript source code](https://sites.google.com/site/olakara/filelist/CascadingComboExample.zip) and try it. I have not included the any server side or ExtJS files with the package. Please provide your comments and suggestions. :)
