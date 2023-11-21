import { LightningElement } from 'lwc';
import ACCOUNT_OBJ from '@salesforce/schema/Account'
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class RecordFormCustomValidation extends LightningElement {
    objName = ACCOUNT_OBJ
    inputValue = ''

    handleChange(event){
        this.inputValue = event.target.value
    }

    handleSubmit(event){
      event.preventDefault()
      const inputCmp = this.template.querySelector('lightning-input')
      const value = inputCmp.value
      console.log('Value: '+ value)
      if(!value.includes('LWC')){
        inputCmp.setCustomValidity("The Account Name must include 'LWC'")        
      }else{
        inputCmp.setCustomValidity("")        
        const field = event.detail.fields
        field.Name = value
        this.template.querySelector('lightning-record-edit-form').submit(field)
      }
      inputCmp.reportValidity()
    }
    successHandler(event){ 
        const toastEvent = new ShowToastEvent({ 
            title:"Account created",
            message: "Record ID: "+ event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)

    }
    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title:"Account Created !!",
            message:"Account Id: " + event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)
    }
    
    handleError(event){
        console.log("Eror" + event.detail + JSON.stringify(event.detail))
        const toastEvent = new ShowToastEvent({
            title:"Error creating Account...",
            message: event.detail.detail,
            variant:"error"
        })
        this.dispatchEvent(toastEvent)
    }

}