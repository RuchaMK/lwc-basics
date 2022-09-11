import { LightningElement } from 'lwc';

export default class WelcomeComponent extends LightningElement {
    welcomeMsg =" Welcome to LWC Examples !! I am property !!"
    dispParentMsg = "Calculating.."
    myname = "Welcome Component"
    total = 0
    
    /*renderedCallback(){
        this.template.querySelector('c-input-component').changeMsg("Calculating..");
    }
    */
   
    performAdd(event){
        let n1 = event.detail.num1
        let n2 = event.detail.num2
        this.total = parseInt(n1) + parseInt(n2)
        this.template.querySelector('c-input-component').changeMsg("Calculation Done");
    }
    

}