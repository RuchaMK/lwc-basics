import { LightningElement } from "lwc";

export default class QuizApp extends LightningElement {
  correctAnswers = 0;
  isSubmitted = false;
  Questions = [
    {
      Q: "Q1",
      Desc: "What is LWC?",
      answers: {
        a: "Lilly web components",
        b: "No Idea",
        c: "Lightning Web Components"
      },
      correctAns: "c"
    },
    {
      Q: "Q2",
      Desc: "What is SAAS?",
      answers: {
        a: "Software as a Service",
        b: "Service as a Software",
        c: "Service as Service"
      },
      correctAns: "a"
    },
    {
      Q: "Q3",
      Desc: "What is SOQL?",
      answers: {
        a: "Software Of Query Language",
        b: "Salesforce Object Query Language",
        c: "Salesforce Object Queue Language"
      },
      correctAns: "b"
    }
  ];

  //selectedOption = {"Q1":"c","Q2":"b","Q3":"a"}
  selectedOption = {};

  captureOption(event) {
    var name = event.target.name;
    var value = event.target.value;
    console.log("Name", name);
    console.log("Value", value);
    //addding to existing object using spread operator
    this.selectedOption = { ...this.selectedOption, [name]: value };
  }

  get disabled() {
    return !(Object.keys(this.selectedOption).length === this.Questions.length);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("selectedOption", JSON.stringify(this.selectedOption));
    //let correct = this.Questions.filter(item => console.log('Slected ans', this.selectedOption[item.Q],'CorrectAns ', item.correctAns))//this.selectedOption[item.Q] === item.correctAns)
    let correct = this.Questions.filter(
      (item) => this.selectedOption[item.Q] === item.correctAns
    ); //this.selectedOption[item.Q] === item.correctAns)
    this.correctAnswers = correct.length;
    this.isSubmitted = true; //to show results
    console.log(
      correct,
      "CorrectAnswers ",
      this.correctAnswers,
      this.isSubmitted
    );
  }

  get colorScheme() {
    return `${
      this.correctAnswers > 1
        ? "slds-text-color_success"
        : "slds-text-color_error"
    }`;
  }

  handleReset() {
    this.selectedOption = {};
    this.correctAnswers = 0;
    this.isSubmitted = false;
  }
}
