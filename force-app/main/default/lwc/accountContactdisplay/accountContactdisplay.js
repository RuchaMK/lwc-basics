import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/ApexData.getAccounts'
import imgetMessage from '@salesforce/apex/ApexData.imgetMessage'

export default class AccountContactdisplay extends LightningElement {
    dispData;
    error;
    
    column = [
            {type: 'button',initialWidth: 50,
            typeAttributes: { 
                label: 'Show',
                variant: 'base'}
            },
            {label:"Id", fieldName:"Id"},
            {label:"Name", fieldName:"Name"},
            {label:"Phone", fieldName:"Phone"},   
            {label:"Type", fieldName:"Type"}
            
            ]

    @wire(getAccounts)
    wiredFunction({error,data}){
        if(data){
            this.dispData = data
            //console.log('data' + data)
        }
        else if(error){
            this.error = error
            //console.log('error' + error)
        }
    }
    //accId = '0015j00000CwQ4kAAF'
    retrievacc
    handleClick(event){
       // s = JSON.stringify(event.detail.row.Id)
        this.retrievacc = event.detail.row.Id
        console.log('R'+this.retrievacc)
       // event.preventDefault()
    }

    
    //imperativeMethod
        handleImpertaive(event){
        // getMessage().then(result=>{}).catch(error=>{})
        imgetMessage({body:'Generate Random Numbers: '})
        .then(result=>{
            this.error = undefined
            alert(result)
            })
        .catch(error=>{console.log("In catch" + error)})       
    }
}
//https://www.avirai.com/post/data-attributes-in-lightning-web-components