import { LightningElement } from 'lwc';

export default class WelcomeComponent extends LightningElement {
    welcomeMsg =" Welcome to LWC Examples !! I am property !!"
    dispParentMsg = "Calculating.."
    myname = "Welcome Component"
    total = 0
    disp = ''
    arr = ['A','B','C']
    percent = 10
    /*renderedCallback(){
        this.template.querySelector('c-input-component').changeMsg("Calculating..");
    }
    */
   
    performAdd(event){
        let n1 = event.detail.num1
        let n2 = event.detail.num2
        this.total = parseInt(n1, 10) + parseInt(n2,10)
        this.template.querySelector('c-input-component').changeMsg("Calculation Done",this.total);
        console.log(n1 , n2, this.total)
    }

    fetchDetails(){
        let elm = this.template.querySelector('h6')
        this.disp = elm.innerText
        console.log(elm.innerText)
        elm.style.color = 'red'
      
        
        let arrElm1 = this.template.querySelectorAll('.arr')  
        Array.from(arrElm1).forEach(item=>{
            item.setAttribute("title",item.innerText)
            //this.disp = ' ' + item.innerText
            console.log("--", item.innerText)   
        })

        let newElem = this.template.querySelector('.newElem')
        newElem.innerHTML = '<p>Adding tag</p>'

    }
    dispPercentage(event){
        this.percent = event.target.value
    }

    get percentage(){
        return `width:${this.percent}%`
    }
    
   

}