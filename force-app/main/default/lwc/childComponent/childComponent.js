import { LightningElement,api } from 'lwc';
//parentComponent 
export default class ChildComponent extends LightningElement {
    @api itemName = "Child Salesforce item"
    @api clickButton = "Click Button..."
    @api num = 0
    @api booleanValue
    //Non Primitive
    @api slider
    

    
    @api handleButtonClick(){
        
        // eslint-disable-next-line @lwc/lwc/no-api-reassignments
        this.clickButton = "Button Clicked Successfully on action at Parent end!!!";
    }
   
  
    scheme //diff property to avoid api reassignment problem
   
    @api
    get detail(){
        return this.scheme
    }
    set detail(data){
        //this.scheme.voucher = data.voucher * 2 //trhows error need to make Shallow copy
        let newVoucher = data.voucher * 2
        this.scheme = {...data,voucher:newVoucher}
    }

    handleFooterChange(){
        let footerElem = this.template.querySelector('.slds-card__footer')
        if(footerElem){
            footerElem.classList.remove('slds-hide')
        }
    }
    

}
