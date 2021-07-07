({
	showhide : function(component, event, helper) {
        alert("abc");
        var saveElement = component.find("b").getElement();
        
        alert(saveElement.style.display);
        saveElement.innerHTML = "bcd";
        //document.getElementById("b").style.display = "block";
        //document.getElementById("b").innerHTML = "xyz";
        component.set("v.Cont","abc");
		
	}
})