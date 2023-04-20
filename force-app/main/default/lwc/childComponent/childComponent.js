import { LightningElement,api } from 'lwc';
//parentComponent 
export default class ChildComponent extends LightningElement {
    @api itemName = "Child Salesforce item"
    @api clickButton = "Click Button..."
    @api num = 0
    @api booleanValue
    //Non Primitive
    @api slider

    @api handleButtonClick(){
        // eslint-disable-next-line @lwc/lwc/no-api-reassignments
        this.clickButton = "Button Clicked Successfully !!!";
    }
}