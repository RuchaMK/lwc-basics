import { LightningElement, track } from "lwc";
/*LP: name, age only present in a class are called local.
name //undefined
DB:  1 way Synchronization b/w Controller and template(HTML)
js to HTML by default
HTML to js using methods */
export default class HelloWorld extends LightningElement {
  name = "John";
  @track emp = {
    empNo: 101,
    active: "yes",
    empFirstName: "",
    empLastName: "",
    details: ["101 ", this.empLastName]
  };
  handleName(event) {
    this.name = event.target.value;
    this.emp.empFirstName = event.target.value;
  }

  handleLastName(event) {
    this.emp.empLastName = event.target.value;
    this.emp.details[1] = event.target.value;
  }
}
