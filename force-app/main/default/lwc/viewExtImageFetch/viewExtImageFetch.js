import { LightningElement } from 'lwc';

export default class ViewExtImageFetch extends LightningElement {
    imageExtUrl;

    connectedCallback(){
       fetch("https://api.thedogapi.com/v1/images/search",{method:"GET"})
       .then((response) => {
        console.log('Dog API Status: ', response)
        if(!response.ok){
            throw new Error("Http Status: ",response.status)
        }
        return response.json()
       })
       .then((data)=>{
        console.log("Data ",data)
        this.imageExtUrl = data[0].url
       })
    }
}

