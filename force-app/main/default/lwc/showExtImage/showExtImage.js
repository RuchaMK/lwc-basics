/* eslint-disable vars-on-top */
import { LightningElement } from 'lwc';
import getExtImage from '@salesforce/apex/viewExtImage.getExtImage';

export default class ShowExtImage extends LightningElement {

imageUrl//to save extracted image url

connectedCallback(){
    getExtImage().then((response) => {
        console.log('#Response:'+ response)
        var parsedData = JSON.parse(response)
        this.imageUrl = parsedData[0].url
    }).catch((error)=>{
        console.log('#Response:'+ error)          
    })
}

}