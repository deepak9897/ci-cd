public class singledml
{   
    public static void deletelead()
    {
     
        list<Opportunity>tc=[select id from Opportunity];
        delete tc;
    
        
    }
}