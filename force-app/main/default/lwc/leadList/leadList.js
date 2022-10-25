import { LightningElement, wire} from 'lwc'
import searchLeads from '@salesforce/apex/LeadSearchController.searchLeads'
import {NavigationMixin} from 'lightning/navigation'

const DELAY = 4000;
const COLS = [
    {
        label: 'Name',
        fieldName: 'Name',
        type: 'text'
    },
    {
        label: 'Title',
        fieldName: 'Title',
        type: 'text'
    },
    {
        label: 'Company',
        fieldName: 'Company',
        type: 'text'
    },
    {
        label: 'View',
        type: 'button-icon',
        initialWidth: 75,
        typeAttributes: {
            title: 'View Details',
            alternativeText:'View Detailss',
            iconName: 'action:info'
        }
    }  
]
export default class LeadList extends NavigationMixin( LightningElement ) {
    leads=[]
    searchTerm
    cols = COLS
    error

    handleSearchChange(event){
        //dispatching event to parent nestedLayout
        if(this.leads){
            this.searchTerm = event.target.value;
            const searchEvent = new CustomEvent('newsearch',{detail:this.searchTerm})
            window.clearTimeout(this.delayTimeout)
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            this.delayTimeout = setTimeout(()=>{
                this.dispatchEvent(searchEvent)
            },DELAY)
        }
        
    }

    @wire(searchLeads,{
        searchTerm:'$searchTerm'
    })
    searchMethod({error,data}){
        if(data){
            this.leads = data;
            const selectedEvent = new CustomEvent('searchcomplete', {detail: this.searchTerm});
            this.dispatchEvent(selectedEvent);
            this.error = undefined;
        }else if(error){
            this.leads = undefined;
            this.error = error;
        }
    }

    handleRowAction(event){
        const row = event.detail.row;
        this.record = row;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: row.Id,
                actionName: 'view'
            },
        });
    }
  /*  leads = [
        {
            "Id": "LeadRef1",
            "Name": "Billi Bong",
            "Title": "Director",
            "Company": "RoseWood",
            "Street": "HakiRose",
            "City": "RoseCity",
            "State": "RoseState",
            "PostCode": "54690"
        },
        {
            "Id": "LeadRef2",
            "Name": "Billi Bong2",
            "Title": "Director2",
            "Company": "RoseWood2",
            "Street": "HakiRose2",
            "City": "RoseCity2",
            "State": "RoseState2",
            "PostCode": "546902"
        },
        {
            "Id": "LeadRef3",
            "Name": "Billi Bong3",
            "Title": "Director3",
            "Company": "RoseWood3",
            "Street": "HakiRose3",
            "City": "RoseCity3",
            "State": "RoseState3",
            "PostCode": "546903"
        },
        {
            "Id": "LeadRef4",
            "Name": "Billi Bong4",
            "Title": "Director4",
            "Company": "RoseWood4",
            "Street": "HakiRose4",
            "City": "RoseCity4",
            "State": "RoseState4",
            "PostCode": "546904"
        }

    ]*/

 

}