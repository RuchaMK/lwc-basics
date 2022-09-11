import { LightningElement,api } from 'lwc';
//parentComponent 
export default class ChildComponent extends LightningElement {
    @api itemName = "Child Salesforce item";
    @api clickButton = "Click Button...";


    @api handleButtonClick(){
        this.clickButton = "Button Clicked Successfully !!!";
    }
}