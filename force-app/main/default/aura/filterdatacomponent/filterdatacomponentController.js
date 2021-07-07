({
	show : function(component, event, helper) 
    {
		var cmpevent=component.getEvent("viewmydata");
        cmpevent.setParams({"filterbyname":component.find("txt1").get("v.value")});
        cmpevent.fire();
	}
})