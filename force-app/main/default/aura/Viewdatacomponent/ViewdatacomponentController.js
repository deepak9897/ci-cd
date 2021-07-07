({
	showdata : function(component, event, helper) 
    {
		var action=component.get("c.accounts");
        action.setCallback(this,function(response)
                           
                           {
                               var state=response.getState();
                               if(state==="SUCCESS")
                               {
                                   component.set("v.acclist",response.getReturnValue());
                               }
                           });
        $A.enqueueAction(action);
	},
    showdata1 : function(component, event, helper) 
    {
		var action=component.get("c.getaccountsbyname");
        action.setParams({"accname":event.getParam("filterbyname")});
        action.setCallback(this,function(response)
                           
                           {
                               var state=response.getState();
                               if(state==="SUCCESS")
                               {
                                   component.set("v.acclist",response.getReturnValue());
                               }
                           });
        $A.enqueueAction(action);
	}
})