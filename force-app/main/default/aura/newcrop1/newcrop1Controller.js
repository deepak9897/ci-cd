({
	hidePopup : function(component, event, helper) {
        var iframeBody = $('#iframeCheckout').contents().find('body');
var styleTag = iframeBody.append($('#cardconnectForm'));

compId = component.find("iframeCheckout");
$A.util.removeClass(compId, 'slds-hide');
$A.util.addClass(compId, 'slds-visible');
		
	}
})