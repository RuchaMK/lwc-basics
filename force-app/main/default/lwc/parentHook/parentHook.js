import { LightningElement } from 'lwc';
import signIn from './signIn.html'
import signUp from './signUp.html'
import parentHook from './parentHook.html'


export default class ParentHook extends LightningElement {
    isChildVisible 
    buttonClicked
    constructor(){
        super()
        console.log('Parent Constructor')
    }
    connectedCallback(){
        console.log('Parent connectedCallback')
    }
    renderedCallback(){
        console.log('Parent renderedCallback') 
    }
    disconnectedCallback(){
        console.log('Parent disconnectedCallback') //Parent not removed
    }
    handleChild(){
        this.isChildVisible = !this.isChildVisible
        console.log('this.isChildVisible',this.isChildVisible)
    }
    handleUser(event){
        this.buttonClicked =  event.target.label
    }
    render(){
        return this.buttonClicked === 'SignIn'? signIn: this.buttonClicked === 'SignUp'? signUp : parentHook
    }
}