import { LightningElement,api } from 'lwc';

export default class LeadListItem extends LightningElement {
    //getting data from Parent, pass data from parent to child
    @api lead 
    /*if not defined in Parent
      Cannot read properties of undefined (reading 'Name')*/
}