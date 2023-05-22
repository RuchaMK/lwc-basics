import { LightningElement, track, api } from "lwc";
/*LP: name, age only present in a class are called local.
name //undefined
DB:  1 way Synchronization b/w Controller and template(HTML)
js to HTML by default
HTML to js using methods */
export default class HelloWorld extends LightningElement {
  @api auraData;
  name = "John";
  showLwc = false;
  @track emp = {
    empNo: 101,
    active: "yes",
    empFirstName: "",
    empLastName: "",
    details: ["201008 ", this.empLastName]
  };
  handleName(event) {
    this.name = event.target.value;
    this.emp.empFirstName = event.target.value;
  }

  handleLastName(event) {
    this.emp.empLastName = event.target.value;
    this.emp.details[1] = event.target.value;
  }
  //getter in LWC
  get empPin() {
    return this.emp.details[0];
  }

  get division() {
    return this.emp.details[0] / 2;
  }
  //conditional rendering
  handleClick() {
    if (this.showLwc === false) {
      this.showLwc = true;
    } else {
      this.showLwc = false;
    }
  }

  //employee array
  employee = ["Jen", "Ben", "Lyla", "Seema"];

  sendData(){
    const event =  new CustomEvent('sendData',{
      detail:{
        "msg":"Hello from from LWC"
      }
     })
     this.dispatchEvent(event)
  }
}
