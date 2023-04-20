import { LightningElement,wire } from 'lwc';
import {publish,MessageContext} from 'lightning/messageService'
import MY_CHANNEL from '@salesforce/messageChannel/myChannel__c'

export default class NewPublisher extends LightningElement {
   
    @wire(MessageContext) messageContext

    handleAdd(){
        const messagePayload = {
            operator:'add',
            constant:'1'
        }

        const publisher = {
            name:'newPublisher',
            data:{location:'Bharat'},
            scope:'ORGANIZATION'
        }
       publish(this.messageContext,MY_CHANNEL,messagePayload,publisher)
    }

    handleMultiply(){
        const messagePayload = {
            operator:'mul',
            constant:'2'
        }
        publish(this.messageContext,MY_CHANNEL,messagePayload)
    }

}
