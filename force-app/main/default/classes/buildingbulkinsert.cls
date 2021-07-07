public class buildingbulkinsert {
    
    
    @AuraEnabled
    public static void Contact(Contact b)
    {
        try
        {
        insert b;
        }
        catch(dmlexception e)
        {
            
            string message='Id not empty';
           // throw new AuraHandledException(e.getMessage());
           throw new AuraHandledException(message);
        }
    }
   
    

}