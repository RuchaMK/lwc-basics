import { LightningElement, api } from 'lwc';

export default class InputComponent extends LightningElement {
    @api parentName = ""
    @api num1 = 0
    @api num2 = 0  
    @api dispmsg = "Enter values"
   
    handleChange(event){    
        if(event.target.name === 'num1'){
            this.num1 = event.target.value;
            //console.log('First num: ' + num1)
        }
        if(event.target.name === 'num2'){
            this.num2 = event.target.value;
            //console.log('Second num: ' + num2)
        }
        this.changeMsg("Sending to Parent component for calculation...Please wait")
       // this.total = parseInt(this.num1) + parseInt(this.num2)        
    }
    
    handleAdd(event){
        
        /*this.dispatchEvent(new CustomEvent('anyEventName')) */
        /*let eventobj = new CustomEvent("add",{detail:})*/
        let eventobj = new CustomEvent('add',{
            detail:{
                num1:this.num1,
                num2:this.num2
            }
        });
        //dispatch event
        this.dispatchEvent(eventobj)
    }

    @api changeMsg(disp){
        this.dispmsg = disp;
    }
}