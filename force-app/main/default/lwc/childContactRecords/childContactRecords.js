import { LightningElement,wire,api } from 'lwc';
import getContacts from '@salesforce/apex/ApexData.getContacts'


export default class ChildRecords extends LightningElement {
    contactRecords
    
    contactColumns = [
        {label:"First Name", fieldName:"FirstName"},
        {label:"Last Name", fieldName:"LastName"},
        {label:"Name", fieldName:"Name"},
        {label:"Email", fieldName:"Email"}
    ]
    
    @api accId
    @wire(getContacts,{accountId:'$accId'}) contact

    imperativeMethod(){
        alert("Imperative")
    }

}