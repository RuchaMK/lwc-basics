import { LightningElement } from 'lwc';

export default class ChildHook extends LightningElement {
    constructor(){
        super()
        console.log('Child Constructor')
    }
    connectedCallback(){
        console.log('Child connectedCallback')
    }
    renderedCallback(){
        console.log('Child renderedCallback') 
    }
    disconnectedCallback(){
        console.log('Child disconnectedCallback')
    }
}