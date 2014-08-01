---
layout: post
title:  How to execute custom queries on Recess framework
description: How to execute custom queries on Recess framework
date:   2011-02-28
tags: Recess PHP
---
Working with Recess framework can be fun if you are ready to dig into the source code of the framework. Due to its small code footprint, going through the code is no trouble for even a beginner. In this article, we will have a look at how to execute custom mysql queries.

Recess framework keeps a registry of data sources available for an application. The Database class provides this registry and provides static methods to access the data sources. The class holds all the data sources in an array. It also has a separate variable to hold the default data source.

The framework does provide you with its own ORM and makes CRUD very simple and zero lines of coding. But there are times when you need to execute complex quires against our data sources. I assume you have set your data source as default in recess-conf.php. Now, to get hold of your PDO object (data source), you can simple call the **getDefaultSource** method. eg:

{% highlight php %}
$pdo = Databases::getDefaultSource();
{% endhighlight %}

And here is an example of executing a query:

{% highlight php linenos %}
$pdo = Databases::getDefaultSource();
$sql = "SELECT * FROM MyTable";
$rows = $pdo->query($sql);
foreach ($rows as $row)
{
 /* Process the selected rows */
}
{% endhighlight %}

####Other methods of Database class

The Database class also provides access to named data sources through static methods. You can use the **addSource** and **getSource** methods to add and get a named source.

You can get an array containing all the data source using the method **getSources**. And also set the default data source using the **setDefaultSource** method.
