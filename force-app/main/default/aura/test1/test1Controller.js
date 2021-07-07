({
    gotoURL : function(component, event, helper) {
        $A.get("e.force:navigateToURL").setParams({ 
            "url": "https://mirketa-e-dev-ed--c.visualforce.com/apex/formsubmit" 
        }).fire();
    },
    
    doInit : function(component,event,helper){
           helper.getBody(component,event,helper);


    },
    handleclick :function(component,event,helper){
         //alert("abc");
       //  component.find("iframe").getElement().innerHTML='abc';
       // component.find("iframe").getElement().src=component.find("iframe").getElement().src;
        // alert(component.find("iframe").getElement().innerHTML);
        var iframeh=component.find("iframe").getElement();
       
       // document.getElementById("Hide").style.display = "inline-block";
        iframeh.style.display = "block";
      //  iframeh.style.background="red";
        iframeh.style.height ='960px';
       // component.find("iframe").getElement().name=component.find("iframe").getElement().name;
       // iframeh.getElementById(iframe).location.reload()
        // alert(component.find("iframe").getElement().contentWindow);       
        component.find("form1").getElement().submit();
        //iframeh.getElementById(iframe).location.reload()
        
       //component.find("iframe").getElement().Id.contentDocument.location.reload(true);
      // alert(component.find("iframe").getElement().contentWindow);
        //alert(component.find("iframe").getElement().innerHTML);
       // iframeh.src = iframeh.src;
       // document.getElementById("form1").submit();
       // document.getElementById("b").style.display = "block";
        // var getElement = component.find("b").getElement();
        
       // alert(saveElement.style.display);
//getElement.style.display = "block";
     // alert(component.get("v.url"));
    if(component.get("v.url")=='')
    {   //alert('a');
        component.set('v.url','https://www.mirketa.com');
    }
        else
        {
            component.set('v.url','https://www.google.com');
        }
        
    },
        showhide :function(component,event,helper){
            component.set("v.showIframe",!component.get("v.showIframe"));
            var iframeh=component.find("iframe").getElement();
            
            component.get("v.showIframe")==true?(iframeh.style.display = "none",component.set("v.buttonlabel","Show")):(iframeh.style.display = "block",component.set("v.buttonlabel","Hide"));
            
        },
   
})