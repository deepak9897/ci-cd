global class BatchClass implements Database.Batchable<sObject>
{
    global database.QueryLocator start(Database.BatchableContext b)
    {
        String query='Select id,CreatedDate,DateCustom__c,CompareDate__c from Case';
        return Database.getQueryLocator(query);
    }
    global void execute(Database.BatchableContext b1,list<Case>dc)
    {
        For(Case caselist:dc)
        {
            if(caselist.DateCustom__c==Date.today())
            {
                caselist.CompareDate__c='Present';
            }
            if(caselist.DateCustom__c>Date.today())
            {
                caselist.CompareDate__c='Future';
            }
            if(caselist.DateCustom__c<Date.today())
            {
                caselist.CompareDate__c='Past';
            }
        }
        try{
            update dc;
        }
        catch(Exception e)
        {
            System.debug('error##'+e);
        }
    }
    global void finish(Database.BatchableContext d){
        
    }
}