import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class Publisher extends LightningElement {
    txt = ''
    @wire(CurrentPageReference) objPageReference
    
    handleTxtChange(event){
        this.txt = event.target.value
    }

    publishEvent(){
        fireEvent(this.objPageReference,'EventFromPub',this.txt)
    }
}
