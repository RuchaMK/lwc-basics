import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'

export default class Navigation extends NavigationMixin(LightningElement) {
    toHome(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'home'
            }
        })
    }

    toChatter(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes: {
                pageName:'chatter'
            }
        })
    }

    toRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes: {
                objectApiName:'Account',
                actionName:'new'
            }
        })
    }

    toDefaultRecord(){
        const sampleDefault = encodeDefaultFieldValues({
            Name:'Shinde',
            Phone:'2132457632'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'new'
            },
            state:{
                defaultFieldValues: sampleDefault
            }
            
        })
    }

    toListView(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName:'account',
                actionName:'list'
            },
            state: {
                filterName:'Recent'
            }
        })
    }

    toViewMode(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                objectApiName:'account',
                recordId:'0011m00000j5qY0AAI',
                actionName:'view'
            }
        })
    }

    toEditMode(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                objectApiName: 'Account',
                recordId: '0011m00000j5qY0AAI',
                actionName: 'edit'
            }
        })
    }

    toFiles(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                atcionName: 'home'
            }
        })
    }

    toTab(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'LWC_Page_1'
            }
        })
    }

    toRel(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                objectApiName: 'Account',
                relationshipApiName: 'Contact',
                recordId : '0011m00000j5qY0AAI',
                actioName: 'view'

            }
        })
    }

    toWeb(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes: {
                url: "https://www.google.com/"
            }
        })
    }

    toLWC(){
        var cdef = {
            componentDef: 'c:LWC_B'
        }
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/one/one.app#' + btoa(JSON.stringify(cdef))
            }
           
        })
    }

    toAura(){
        this[NavigationMixin.Navigate]({
            type: "standard__component",
            attributes: {
                componentName: "c__Aura_1"
            },
            state: {
                "c__id":"1214312"
            }
        })
    }

    toVf(){
        this[NavigationMixin.Navigate]({
            type:"standard__webPage",
            attributes: {
                url: "/apex/vfPage_1"
            }
        }).then(generatedUrl => {
            console.log('##',generatedUrl)
            window.open(generatedUrl, "_blank")
        })
    }

    toStdAppPage(){
        this[NavigationMixin.Navigate]({
            type:"standard__app",
            atrributes:{
                appTarget:'standard__Sales'
            }
        })
    }

    toAppRecPage(){
        this[NavigationMixin.Navigate]({
            type:'standard_app',
            attributes:{
                appTarget:'standard__LightningSales',
                PageRef:{
                    type:'standard__LightningSales',
                    attributes:{
                        recordId:'0011m00000kTCrBAAW',
                        objectApiName:'Account',
                        actionName:'view'
                    }
                }
            }
        })
    }

    toLogin(){
        this[NavigationMixin.Navigate]({
            type:'comm_loginPage',
            attributes: {
                actionName: 'login'
            }
        })
    }
}