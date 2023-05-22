import { LightningElement,wire } from 'lwc';
import commChannel from "@salesforce/messageChannel/sampleChannel__c"
import {APPLICATION_SCOPE,MessageContext,subscribe, unsubscribe } from 'lightning/messageService';
export default class Lwc_C extends LightningElement {
    receivedMsg = ''
    name =''
    @wire(MessageContext)
    messageContext

    subscribeMsg(){
    this.subscription = subscribe(this.messageContext, commChannel,
        (message) => {this.handleMessage(message)}, {scope:APPLICATION_SCOPE});
    }

    connectedCallback(){
        this.subscribeMsg()
    }

    unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription = null
    }

    handleMessage(message){
       // alert(JSON.stringify(message))
        this.name = message.channeldata.name ? message.channeldata.name : 'No name'
        this.receivedMsg = message.channeldata.msg ? message.channeldata.msg:'No Publish Message'
    }

}