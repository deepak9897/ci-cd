public class demo 
{
   @AuraEnabled
    public static list<Account>accounts()
    {
        return [select name,type,annualrevenue from account];
    }
  
    @AuraEnabled
    public static list<Account>getaccountsbyname(string accname)
    {
        return [select name,type,annualrevenue from account where name like :accname+'%'];
    }
    
}