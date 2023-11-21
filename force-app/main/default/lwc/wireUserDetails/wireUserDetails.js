import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getObjectInfos } from 'lightning/uiObjectInfoApi';
import ID_FIELD from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
import ACCOUNT_OBJ from '@salesforce/schema/Account'
import CONTACT_OBJ from '@salesforce/schema/Contact'
const fields = [NAME_FIELD, EMAIL_FIELD]

export default class WireUserDetails extends LightningElement {
    userId = ID_FIELD
    userDetails

    /*import {adapter} from 'adapterModule' 
    @wire(adapter,{adapterConfig})
     property or
     function({response}) 
     userDetailFunction(response){
       console.log('getRecord Response: ', response)
    }
    */

    @wire(getRecord, {recordId:'$userId',fields})
        userDetailsFunc({data,error}){
            console.log('&&&&',data)
            if(data){
                this.userDetails = data.fields
            }
            if(error){
                console.log('Error: ',error)
            }
        }
    
    @wire(getRecord, {recordId:'$userId',fields})
        userDetailsProperty

    defaultRecordTypeId
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJ})
    objectInfoFunc({data,error}){
        if(data){
            console.log('getObjectInfo',data)
            this.defaultRecordTypeId = data.defaultRecordTypeId
        }
        if(error){
            console.log(error)
        }   

    }

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJ})
    objectInfoProperty
    
    objectNames = [ACCOUNT_OBJ,CONTACT_OBJ]
    objectInfos

    @wire(getObjectInfos,{objectApiNames:'$objectNames'})
    objectInfosFunc({data,error}){
        if(data){
            this.objectInfos = data
            console.log('getObjectInfos',data)
        }
        else{
            console.log('getObjectInfos',error)
        }
    }

}

