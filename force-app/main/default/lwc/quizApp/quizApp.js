import { LightningElement } from "lwc";

export default class QuizApp extends LightningElement {
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
        c: "SSalesforce Object Queue Language"
      },
      correctAns: "b"
    }
  ];

  selectedOption(event) {
    console.log("Name", event.target.name);
    console.log("Value", event.target.value);
  }
}
