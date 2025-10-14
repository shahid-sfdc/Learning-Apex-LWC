import { LightningElement,wire } from 'lwc';
// Import message service features required for subscribing and the message channel
import {
  subscribe,
  unsubscribe,
  APPLICATION_SCOPE,
  MessageContext,
} from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/test__c';

export default class Subscriber extends LightningElement {
  subscription = null;
  messageRecord;
  @wire(MessageContext)
  messageContext;

  subscribeToMessageChannel() {
    if (!this.subscription) {
        this.subscription = subscribe(
            this.messageContext,
            recordSelected,
            (message) => this.handleMessage(message),
            { scope: APPLICATION_SCOPE }
        );
    }
}


// Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
connectedCallback() {
  this.subscribeToMessageChannel();
}
disconnectedCallback() {
  this.unsubscribeToMessageChannel();
}
unsubscribeToMessageChannel() {
  unsubscribe(this.subscription);
  this.subscription = null;
}
// Handler for message received by component
handleMessage(message) {
  this.messageRecord = message.lmsdata;
}


}