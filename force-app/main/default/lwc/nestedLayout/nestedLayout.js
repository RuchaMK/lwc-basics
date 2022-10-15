import { LightningElement } from 'lwc';

export default class NestedLayout extends LightningElement {
   search

    handleSearch(event){
        this.searchTerm = event.target.value
    }

}