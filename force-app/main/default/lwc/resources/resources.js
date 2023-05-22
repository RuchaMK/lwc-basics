import { LightningElement } from 'lwc';
import SAMPLE_IMAGE from '@salesforce/resourceUrl/sample'
import MOMENT from '@salesforce/resourceUrl/moment'
import ANIMATE from '@salesforce/resourceUrl/sampleCSS'
import ASSET_FILE from '@salesforce/contentAssetUrl/linkedinicon'
import {loadScript, loadStyle} from 'lightning/platformResourceLoader'
import LOCALE from '@salesforce/i18n/locale'
import CURRENCY from '@salesforce/i18n/currency'
import DIR from '@salesforce/i18n/dir'
import LABEL_1 from '@salesforce/label/c.sampleLabel'
import LABEL_2 from '@salesforce/label/c.sampleLabelTwo'
import hasViewAllData from '@salesforce/userPermission/ViewAllData'
import CustomPermission from '@salesforce/customPermission/checkDemo'
import FORM_FACTOR from '@salesforce/client/formFactor'
import ID from '@salesforce/user/Id'
import IS_GUEST from '@salesforce/user/isGuest'

export default class Resources extends LightningElement {
    sampleImage = SAMPLE_IMAGE
    yearsAgo11 = ''
    isLibLoaded = false //to avoid re loading of library all the time on performance of any action
    file = ASSET_FILE
    number = 6575557.86
    dir = 'rtl'//DIR
    //label1 = LABEL_1

    LABELS = {
        label1:LABEL_1,
        label2:LABEL_2
    }
    formfactor = FORM_FACTOR
    userId = ID
    isGuest = IS_GUEST
    //third party js
    renderedCallback(){
        if(this.isLibLoaded){
            return  //loaded
        }
        Promise.all([
            loadScript(this, MOMENT + '/moment/moment.min.js'),
            loadStyle(this, ANIMATE + '/animate/animate.min.css')
        ]).then(()=> {
            this.setDateOnScreen()
        }).catch(error => {
            console.log(error)
        })
        this.isLibLoaded = true
        //Promise.all is used only when there is multiple file loading 
            /*Promise.all([
                loadScript(this, MOMENT + '/moment/moment.min.js')
            ]).then(()=>{
                this.setDateOnScreen()
            }).catch(error => {
                console.log(error)
            })
            this.isLibLoaded = true
        */
          /* //without promise all loadScript(this, MOMENT+'/moment/moment.min.js').then(()=>{ 
                this.setDateOnScreen()
            }).catch(error=>{ 
                console.error(error)
            })
            this.isLibLoaded = true*/
            
        }
       
    

    setDateOnScreen(){
            // Access the 'moment' function from the dynamically loaded script
        const date = window.moment("20120620", "YYYYMMDD");
        this.yearsAgo11 = date.format("MMMM D, YYYY");
    }

    //internationalization
    formattedNumber = new Intl.NumberFormat('ar-EG',{
        style:'currency',
        currency:'USD',
        currencyDisplay:'symbol'
    }).format(this.number)

    get hasViewAllDataAvailable(){
        return hasViewAllData
    }

    get hasCustomPermission(){
        return CustomPermission
    }

}