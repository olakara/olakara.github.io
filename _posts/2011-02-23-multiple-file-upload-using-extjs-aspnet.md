---
layout: post
title:  Multiple file upload using Ext JS & ASP.Net MVC
description: Learn how to do multiple file upload using Ext JS & ASP.Net MVC
date:   2011-02-23
tags: ExtJS C#
---
Recently I had to build an image gallery for one of my project which used ExtJS & ASP.Net MVC. The gallery consisted of many components, and I will explain the multiple image file upload functionality used in this gallery.

There are many ExtJS plugins already available for file upload that uses flash. One of my requirements was to avoid flash in my project. So, I could not use plugins like [Awesome uploader](http://jsjoy.com/blog/ext-js-extension-awesome-uploader) or [UploadForm](http://www.aariadne.com/uploadform/). So, if you need some fancy looking component & functionality, I suggest you have a look at them as well!

Here I have a simple uploader form that can be used for any server side. Here I will be using ASP.Net MVC. Let’s have a look at the javascript first:

{% highlight javascript linenos %}
UploaderWindow =  Ext.extend(Ext.Window,{
  title: 'Upload Window',
  closeAction: 'close',
  id: 'upload-window',
  folderID: null,
  initComponent : function() {

    // Upload Form
    var uploadForm = new Ext.form.FormPanel({
            id: 'upload-form',
            fileUpload: true,
            frame: true,  
            border: false,
            bodyStyle: 'padding: 10px 10px 0 10px;',
            labelWidth: 50,
            defaults: {
              anchor: '100%'
             },
            items: [{
                 xtype: 'hidden',
                 name: 'fieldCount',
            id: 'fieldCount',
            value: 0
            },{
            xtype: 'hidden',
            name: 'folderID',
            id: 'folderID',
            value: 0
            },{
                 xtype: 'fileuploadfield',
                 emptyText: 'Select an image',
                 fieldLabel: 'Image',
                 name: 'file0'
            }],
            buttons: [{
              text: 'Add File',
              iconCls: 'add_icon',
              handler: function(button,event) {

              var fIndex = parseInt(uploadForm.findById('fieldCount').getValue()) + 1;
              uploadForm.add(newField('file' + fIndex));
              uploadForm.findById('fieldCount').setValue(fIndex);

              uploadForm.doLayout();

            }
           },{
            text: 'Upload',
            handler: function(button, event) {

                if (uploadForm.getForm().isValid()) {
                    uploadForm.getForm().submit({
                      url: '/Gallery/Upload',
                      waitMsg: 'Uploading your photo...',
                      success: function(form, o){
                        alert('Successfuly uploaded!');
                      },
                      failure: function(form, o){
                        alert('Error in uploading the files');
                      }
                  });
               }
            }
          },{
            text: 'Cancel',
            handler: function() {
              var win = Ext.getCmp('upload-window');
              win.close();
          }
          }]
    });

// Initial Configuration for the window
var initConfig = {
  resizeable: false,
  modal: true,
  frame: true,
  width: 400,
  autoHeight: true,
  items: [uploadForm]
};

Ext.apply(this, Ext.apply(this.initialConfig, initConfig));
  UploaderWindow.superclass.initComponent.call(this);
  },
  onRender: function(){
    var fidField = this.upForm.findById('folderID');
    fidField.setValue(this.folderID);
    UploaderWindow.superclass.onRender.apply(this, arguments);
  }
});
{% endhighlight %}

I have extended Ext.Window class to create my component. The window provides all the controls necessary to upload multiple files onto the server. The upload form is basically embedded within the window. This helps in reuse of the entire component and also helps in customization. In the new component, we have some custom parameters. Once, such parameter is folderID (the default value is null). But when the upload window is created, I would pass a real value. On the server side, the uploaded images are stored according to the folderID passed.
Here is how the uploader form looks like:

<img class="img-responsive image-center thumbnail" src="{{site.url}}/img/extjs/multifileuploader.png" alt="Ext JS Multiple File uploader form" />

The initComponent method is used to initialize the component. I have the form panel and its elements defined here. Note that I a hidden field to hold the number of files being uploaded (fieldCount) and is set to zero. I also have a field to hold the folder information. This hidden field is populated when the window is instantiated. The file selection functionality is provided by the well known ExtJS component: FileUploadField. Each time the user click on “Add File” button, we create a new element of the type FileUploadField. This is done with the help of newField method:

{% highlight javascript linenos %}
function newField(name) {
    var rulesField = new Ext.ux.form.FileUploadField({
        name: name,
        emptyText: 'Select an image',
        fieldLabel: 'Image'
    });
    return rulesField;
}
{% endhighlight %}

Now, let’s have a look at the server side code. Our server side is accessed through the URL /Gallery/Upload and the method will be obviously POST. One of my requirements was to upload only images so; I added a simple check for the file extension on the server side. You could do the same on the client side as will. Here is the server side code:

{% highlight csharp linenos %}
[AcceptVerbs(HttpVerbs.Post)]
public ActionResult Upload()
{
    string[] supportedTypes = new string[]{ "png", "gif", "jpg", "jpeg" };
    int count = int.Parse(Request.Params["fieldCount"]);
    int folderID = int.Parse(Request.Params["folderID"]);

    try
    {
        for (int i = 0; i <= count; i++)
        {
            HttpPostedFileBase postedFile = Request.Files["file" + i];
            if (postedFile != null)
            {
                string x = Path.GetExtension(postedFile.FileName);
                if (supportedTypes.Contains(x.TrimStart('.')))
                {
                   // Process the image...
                } else {
                   // document not supported!
                }
            }
        }

    }
    catch (Exception e)
    {
        // Catch all exceptions...
    }
}
{% endhighlight %}

####Improvements:
There is always space for improvements. You can go ahead with lots of modifications to this component. By end of the day, I had lot of changes. Few improvements are:

1. Removing added files from the form.
2. Client side validations.
3. Option for entering meta data for the images being uploaded.
4. Progress bar like other components mentioned above. .. etc

Your comments are welcome. Enjoy coding! :)
