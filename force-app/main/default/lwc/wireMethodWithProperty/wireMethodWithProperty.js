import { LightningElement,wire } from 'lwc';
import getRecords from '@salesforce/apex/PontactList.fetchDetails';
const columns = [
  { label: 'Account Name', fieldName: 'Name' },
  
  { label: 'Phone', fieldName: 'Phone' },
  
];
export default class WireMethodWithProperty extends LightningElement {
  columns = columns;
@wire(getRecords) contacts;



}