import { LightningElement } from 'lwc';

export default class WelcomeComponent extends LightningElement {
    welcomeMsg =" Welcome to LWC Examples !! I am property !!"
    dispParentMsg = "Calculating.."
    myname = "Welcome Component"
    total = 0
    disp = ''
    arr = ['arr1','arr2','arr3']
    /*renderedCallback(){
        this.template.querySelector('c-input-component').changeMsg("Calculating..");
    }
    */
   
    performAdd(event){
        let n1 = event.detail.num1
        let n2 = event.detail.num2
        this.total = parseInt("111",n1) + parseInt("111",n2)
        this.template.querySelector('c-input-component').changeMsg("Calculation Done");
    }

    fetchDetails(){
        let elm = this.template.querySelector('h6')
        this.disp = elm.innerText
        console.log(elm.innerText)
      
        console.log(this.arr)

    }
    

}