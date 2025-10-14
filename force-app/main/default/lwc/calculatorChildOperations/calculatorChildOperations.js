import { LightningElement, api } from 'lwc';

export default class CalculatorChildOperations extends LightningElement {
@api valueOne;
@api valueTwo;
sum = 0;
outputvalue = false;

Subtraction(event){
  this.outputvalue = true;
  this.sum = this.valueOne - this.valueTwo;
  
  }
  Multiplication(event){
    this.sum = this.valueOne * this.valueTwo;
    
    }
    Division(event){
      this.sum = this.valueOne / this.valueTwo;
      
      }
    Addition(event){
        this.sum = parseInt(this.valueOne) + parseInt(this.valueTwo);
        
        }
}

