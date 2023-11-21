import { LightningElement } from 'lwc';
import ACCOUNT_OBJ from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import PHONE_FIELD from '@salesforce/schema/Account.Phone'

export default class RecordEditForm extends LightningElement {
    objName = ACCOUNT_OBJ
    fields = {accName:NAME_FIELD,type:TYPE_FIELD,phone:PHONE_FIELD}
    
    handleReset(){
        var inputFields = this.template.querySelectorAll('lightning-input-field')
        if(inputFields){
            Array.from(inputFields).forEach(field => {field.reset()})
        }
    }
}