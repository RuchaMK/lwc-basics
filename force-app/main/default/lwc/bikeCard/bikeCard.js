//data,detail,list,selector,title
import { LightningElement } from 'lwc';
export default class hlulu extends LightningElement {
    name = 'Electra X4';
   description = 'A sweet bike built for comfort.';
   category = 'Mountain';
   material = 'Steel';
   price = '$2,700';
   pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';

   //connectedCallback - fires when a component is inserted into the DOM
   ready = false;
   connectedCallback(){
     //sets a timer which executes the code once the timer expires.
     setTimeout(()=>{this.ready = true},3000)
     //calling the function after 3000 millisecond i.e 3 sec
   }
}