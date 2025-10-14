import { LightningElement ,wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/test__c';

export default class Publisher extends LightningElement {
  @wire(MessageContext)
    messageContext;
  publishMessage(){
    const payload = { lmsdata: "This is the test data that i have passed" };

        publish(this.messageContext, recordSelected, payload);

  }
}