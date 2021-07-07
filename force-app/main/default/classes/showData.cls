public with sharing class showData {
    
    public static string val{get{
        val=cnval;
        return val;
    } set;}
    private static string cnval;
    
    @AuraEnabled
    public static string assignValue(string svr){
        cnval=svr;
        return svr;
    }    
}