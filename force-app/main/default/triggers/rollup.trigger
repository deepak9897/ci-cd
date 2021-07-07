trigger rollup on Contact (after insert,after update,after delete) 
{
    if(trigger.isinsert||trigger.isupdate)
    {
list<id>aid=new list<id>();
    for(contact c:trigger.new)
    {
        aid.add(c.accountid);
    }
    
    map<id,account>acc=new map<id,account>([select id,(select id from Contacts) from account where id in:aid]);
    
    for(contact k:trigger.new)
    {
        account a=acc.get(k.accountid);
        a.NoContact__c=a.contacts.size();
    }
    update acc.values();
    }
    if(trigger.isdelete)
    {
        list<id>aid=new list<id>();
    for(contact c:trigger.old)
    {
        aid.add(c.accountid);
    }
    
    map<id,account>acc=new map<id,account>([select id,(select id from Contacts) from account where id in:aid]);
    
    for(contact k:trigger.old)
    {
        account a=acc.get(k.accountid);
        a.NoContact__c=a.contacts.size();
    }
    update acc.values();
    }
    
}