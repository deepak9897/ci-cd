({
    myAction : function(component, event, helper) {
        var inp = component.find("input");
        var val = inp.get("v.value");
        //alert(val);
        var action = component.get("c.assignValue");
        action.setParams({
           "svr" : val
        });
        action.setCallback(this,function(response){
            var state = action.getState();
            if(state==="SUCCESS"){
                component.set("v.inptText",response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
        var frame = document.getElementById("myFrame");
        frame.src=frame.src;
    }
})