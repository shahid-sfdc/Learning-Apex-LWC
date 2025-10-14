import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetObject extends LightningElement {
  ApiName;
  childrelation
  @wire(getObjectInfo,{
    objectApiName: ACCOUNT_OBJECT,
  }) 
  objectInfo({data,error}) {
    if(data) {
      console.log('Account Details: ',data);
      
      
      this.ApiName = data.apiName;
      this.childrelation = data.childRelationships;;
      console.log('child Array',this.childrelation);
     
      
      
    }
    if(error) {
      console.log('error',error);
    }}
}