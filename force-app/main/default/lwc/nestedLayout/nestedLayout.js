import { LightningElement } from 'lwc';

export default class NestedLayout extends LightningElement {
   search
   searchInput
   searchComplete = false

    handleSearch(event){
        this.searchTerm = event.target.value
    }

    handleSearchComplete(event){
        this.searchInput = event.detail;
        this.searchComplete = true;
    }
}