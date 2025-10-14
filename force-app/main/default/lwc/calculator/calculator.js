import { LightningElement } from 'lwc';



export default class Calculator extends LightningElement {
produceValueOne;
produceValueTwo;
inputValueOne(event){
this.produceValueOne = event.target.value;
}
inputValueTwo(event){
this.produceValueTwo = event.target.value;
}
}

