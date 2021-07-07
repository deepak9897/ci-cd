public class testapex1 {   
    @AuraEnabled 
    public static Contact getRecords(Id recordId) {
        
       Contact myContacts = [Select ID, FirstName, LastName, Email, Phone,BirthDate,PatientId__c From Contact Where Id = :recordId limit 1]; 
           return myContacts;
           }
    
    
    
}