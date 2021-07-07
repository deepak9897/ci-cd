public class MyContactListController {
    
    @AuraEnabled
        public static List<Contact> getContacts(Id recordId) {
       return [Select Id, FirstName, LastName, Email, Phone,BirthDate,PatientId__c From Contact Where AccountId = :recordId];
}

}