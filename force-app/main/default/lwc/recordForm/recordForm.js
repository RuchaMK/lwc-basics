import { LightningElement } from 'lwc'
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
//Syntax
//import OBJECT_NAME from '@salesforce/schema/objectReference';
//import FIELD_NAME from '@salesforce/schema/object.fieldReference'
import ACCOUNT_OBJ from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
export default class RecordForm extends LightningElement {
    
    objName = ACCOUNT_OBJ
    //array of fields
    fieldList = [NAME_FIELD,TYPE_FIELD,INDUSTRY_FIELD]

    successHandler(event){
        console.log(event.detail.id)
        const toastEvent = new ShowToastEvent({
            title:"Account Created",
            message:"Record Id: " + event.detail.id,
            variant:"success"
        })

        this.dispatchEvent(toastEvent)
    }
}