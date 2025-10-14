import { LightningElement, track } from 'lwc';

export default class ObjectNested extends LightningElement {
  @track mydetails = {
    firstname: 'John',
    lastname: 'Doe',
    age: 25,
    
      
}
Addnew(event){
this.mydetails.lastname = 'Singh';

}}