import { LightningElement, wire } from 'lwc';
//import channel from "@salesforce/import { APPLICATION_SCOPE,createMessageContext, MessageContext, publish, releaseMessageContext, subscribe, unsubscribe} from 'lightning/messageService';
import commChannel from "@salesforce/messageChannel/sampleChannel__c";
import {MessageContext, publish} from "lightning/messageService"
export default class Lwc_B extends LightningElement {
    name = ''
    msg = ''

    @wire(MessageContext) //list of all cmp using te lms channel
    messageContext

    handleName(event){
        this.name = event.target.value
        console.log('$$Name:',this.name)
    }

    handleMsg(event){
        this.msg = event.target.value
    }

    handlePublish(){
        const mypayload = {
            channeldata:{
            name:this.name,
            msg:this.msg
            }            
        }
        publish(this.messageContext, commChannel, mypayload)
    }
}