({
	
    patientinsert: function(component,event,helper) 
    {
        
  
        var txtpatientid=component.find("txt1");
      var patientidvalue= txtname.get("v.value");
        var txtfirstname=component.find("txt2");
         var namefirst= txtaddress.get("v.value");
        var txtlastname=component.find("txt3");
         var namelast = txtflat.get("v.value");
         var txtdob=component.find("txt4");
         var namedob= txtflat.get("v.value");
        //alert(nameaddress);
        
       if(patientidvalue==="")
        {
            txtname.setCustomValidity("Id is Mandatory");
        }
        
       else
       {
           var cmp=component.find("myspinner");
        $A.util.removeClass(cmp,"slds-hide");
        var action=component.get("c.Contact");
        action.setParams({"b":component.get("v.contactrecord")});
        action.setCallback(this,function(response)
                           {
                               var state=response.getState();
                               if(state==="SUCCESS")
                               {
                                    console.log('record inserted');
                                   var tevent=$A.get("e.force:showToast");
                                   tevent.setParams({
                                       title:'record inserted',
                                       message:'Your Record is Successfully Inserted',
                                       duration:'6000',
                                       type:'success',
                                       mode:'pester'
                                      
                                       
                                       
                                      
                                   });
                                   tevent.fire();
                                  
                               }
                               else if(state==="ERROR")
                               {
                                   var errors=action.getError();
                                   if(errors)
                                   {
                                       alert(errors[0].message);
                                   }
                               }
                           });
               $A.enqueueAction(action);
        
       
        }
         txtpatientid.reportValidity();
        
    }
 

})