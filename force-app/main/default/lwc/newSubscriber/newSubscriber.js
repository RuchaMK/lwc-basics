import { LightningElement, wire } from "lwc";
import {
  subscribe,
  unsubscribe,
  MessageContext
} from "lightning/messageService";
import MY_CHANNEL from "@salesforce/messageChannel/myChannel__c";

export default class NewSubscriber extends LightningElement {
  result = 0;
  susbcription = null;

  @wire(MessageContext) msgContext;

  connectedCallback() {
    this.subscribeToChannel();
  }

  subscribeToChannel() {
    this.susbcription = subscribe(this.msgContext, MY_CHANNEL, (msg) =>
      this.handleMsg(msg)
    );
  }

  handleMsg(msg) {
    //alert("msg"+JSON.stringify(msg))

    if (msg.operator === "add") {
      this.result = Number(this.result) + Number(msg.constant);
    } else if (msg.operator === "mul") {
      this.result *= msg.constant;
    }
  }

  disconnectedCallback() {
    unsubscribe(this.susbcription);
    this.susbcription = null;
  }
}
