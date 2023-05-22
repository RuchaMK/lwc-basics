import { LightningElement, api } from 'lwc';
import { ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class BasicRecords extends LightningElement {
    @api recordId
    @api objectApiName

    handleToast(){
        const event = new ShowToastEvent({
            title:'Success!!',
            message:'Button Clicked Successfully',
            variant:'success'
        })
        this.dispatchEvent(event)
    }

    handleToast2(){
        this.showToast('Information!!', ' This is an information Toast {0} {1}' ,'info','pester')
    }

    handleToast3(){
        this.showToast('Warning!!','This is a warning Toast','warning','sticky')
    }

    handleToast4(){
        this.showToast('Error','Error Toast','error','sticky')
    }

    //custom method
    showToast(title,message,variant,mode){
        const event = new ShowToastEvent({title, message, variant, mode,
        messageData:[
            'Sf Info: ',{url:'https://www.google.com/',label:'Click'}
        ]})
        this.dispatchEvent(event)
    }
}