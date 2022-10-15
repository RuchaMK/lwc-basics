public with sharing class LeadSearchController {
   
    @AuraEnabled(cacheable=true)
    public static List<Lead> searchLeads(String searchTerm) {
        List<Lead> leadList = new List<Lead>();
        if(String.isNotBlank(searchTerm)){
        //The return type of a SOSL search is List of List of sObjects.
            List<List<SObject>> leads = [FIND :searchTerm
            Returning Lead(
                Id, Name, Title, Company,
                Street, City, State, PostalCode
                ORDER BY Name
                LIMIT 10 
            )];
            leadList = leads[0];
        }
        return leadList;          
    }
}
