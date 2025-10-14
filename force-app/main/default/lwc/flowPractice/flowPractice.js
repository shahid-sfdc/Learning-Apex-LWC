import { LightningElement, api } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';

export default class FlowPractice extends LightningElement {
  @api inputvalue;
  @api outputvalue;
  handleClick(){
    this.outputvalue = this.inputvalue;
    const event = new FlowAttributeChangeEvent('outputvalue', this.outputvalue);
    this.dispatchEvent(event);
  }
  //Create the flow attribute event
}
  
