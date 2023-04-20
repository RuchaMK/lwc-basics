import { LightningElement,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener,unregisterAllListeners } from 'c/pubsub';

export default class Subscriber extends LightningElement {
    receivedTxt = ''
    @wire(CurrentPageReference) pageRef

    connectedCallback(){ //adding a listener
        registerListener('EventFromPub',this.setReceivedTxt,this) //by default parameter is passed
    }

    setReceivedTxt(txt){
        this.receivedTxt = txt
    }

    disconnectedCallback(){
        unregisterAllListeners(this)
    }
}