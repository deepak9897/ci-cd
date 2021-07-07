({
    getBody : function(component,event,helper){
        var action = component.get("c.getRecords");
        action.setParams({recordId:component.get("v.recordId")});
        //alert(component.get("v.recordId"));
       action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(state);
                
                var conts = response.getReturnValue();
               var bodydetail =  this.getBody1(conts);
                component.set("v.form1",bodydetail);
                
               // alert('conts'+JSON.stringify(conts.FirstName));
                
           
            }
            
        });
        $A.enqueueAction(action);
        
    },
    getBody1 : function(Contact){
        var body;
        var partnerName = 'demo';
        
        var last ='WWlimson';
        
        body='<NCScript xmlns="http://secure.newcropaccounts.com/interfaceV7" xmlns:NCStandard="http://secure.newcropaccounts.com/interfaceV7:NCStandard" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'
        body+='<Credentials>'
        body+='<partnerName>'+partnerName+'</partnerName>'
        body+='<name>demo</name>'
        body+='<password>demo</password>'
        body+='<productName>SuperDuperSoftware</productName>'
        body+='<productVersion>V5.3</productVersion>'
        body+='</Credentials>'
        body+='<UserRole>'
        body+='<!--  See XML Schema: UserType for valid values  -->'
        body+='<user>LicensedPrescriber</user>'
        body+='<!--  See XML Schema: RoleType for valid values  -->'
        body+='<role>doctor</role>'
        body+='</UserRole>'
        body+='<Destination>'
        body+='<!--  See XML Schema: RequestedPageType for valid values  -->'
        body+='<requestedPage>compose</requestedPage>'
        body+='</Destination>'
        body+='<Account ID="demo">'
        body+='<accountName>Your Customer\'s Account Name</accountName>'
        body+='<siteID>demo</siteID>'
        body+='<AccountAddress>'
        body+='<address1>232323 Test</address1>'
        body+='<address2>Suite 240</address2>'
        body+='<city>Boston</city>'
        body+='<state>MA</state>'
        body+='<zip>10409</zip>'
        body+='<zip4>1234</zip4>'
        body+='<country>US</country>'
        body+='</AccountAddress>'
        body+='<accountPrimaryPhoneNumber>5555551212</accountPrimaryPhoneNumber>'
        body+='<accountPrimaryFaxNumber>5555551313</accountPrimaryFaxNumber>'
        body+='</Account>'
        body+='<Location ID="DEMOLOC1">'
        body+='<locationName>Your Customer\'s Location Name</locationName>'
        body+='<LocationAddress>'
        body+='<address1>232323 Test</address1>'
        body+='<address2>Suite 240</address2>'
        body+='<city>Boston</city>'
        body+='<state>MA</state>'
        body+='<zip>10409</zip>'
        body+='<zip4>1234</zip4>'
        body+='<country>US</country>'
        body+='</LocationAddress>'
        body+='<primaryPhoneNumber>5555551212</primaryPhoneNumber>'
        body+='<primaryFaxNumber>5555551213</primaryFaxNumber>'
        body+='<pharmacyContactNumber>5555551212</pharmacyContactNumber>'
        body+='</Location>'
        body+='<LicensedPrescriber ID="DEMOLP1">'
        body+='<LicensedPrescriberName>'
        body+='<last>Smith</last>'
        body+='<first>Doctor</first>'
        body+='<middle>J</middle>'
        body+='</LicensedPrescriberName>'
        body+='<dea>AS1111111</dea>'
        body+='<upin>12345678</upin>'
        body+='<licenseState>TX</licenseState>'
        body+='<licenseNumber>12345678</licenseNumber>'
        body+='<npi/>'
        body+='</LicensedPrescriber>'
        body+='<Patient ID="'+Contact.Id.trim()+'">'
        body+='<PatientName>'
        body+='<last>'+Contact.LastName+'</last>'
        body+='<first>'+Contact.FirstName+'</first>'
        body+='<middle>J</middle>'
        body+='</PatientName>'
        body+='<medicalRecordNumber>123456</medicalRecordNumber>'
        body+='<memo>Picks up meds at VA</memo>'
        body+='<PatientAddress>'
        body+='<address1>23223 Test</address1>'
        body+='<address2>Suite 240</address2>'
        body+='<city>Boston</city>'
        body+='<state>MA</state>'
        body+='<zip>10455</zip>'
        body+='<country>US</country>'
        body+=' </PatientAddress>'
        body+='<PatientContact>'
        body+='<homeTelephone>1234567890</homeTelephone>'
        body+='</PatientContact>'
        body+='<PatientCharacteristics>'
        body+='<dob>19800115</dob>'
        body+='<gender>M</gender>'
        body+='</PatientCharacteristics>'
        body+='</Patient>'
        body+='</NCScript>';
        return body;
        },
    
})