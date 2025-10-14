import { LightningElement,api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import CLEAN_FIELD from '@salesforce/schema/Account.CleanStatus';


export default class RecordForm extends LightningElement {
  @api objectApiName;
  @api recordId;
  fields = [NAME_FIELD,CLEAN_FIELD];

  
}