trigger insertLead on lead (before update) 
{

    for(lead c:trigger.new)
    {
        lead c1=trigger.oldmap.get(c.id);//trigger.oldmap is old version of records .
       
               if(c.LeadPhone__c==true)
                 {
                  c.phone = '+1'+c1.Phone;
                 }
            
                
            
        }
    
}