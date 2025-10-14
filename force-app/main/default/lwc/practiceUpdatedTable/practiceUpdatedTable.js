import { LightningElement,wire, track,api} from 'lwc';                          
import updatedClass  from '@salesforce/apex/UpdatingRecord.crossMethod';
import { updateRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import CONTACT from '@salesforce/schema/Contact';
import { getPicklistValues }  from 'lightning/uiObjectInfoApi';
import LEAD_SOURCE from '@salesforce/schema/Contact.LeadSource';



const columns = [
  { label: 'Name', fieldName: 'Name', editable : true},
  { label: 'Phone', fieldName: 'Phone', type: 'phone', editable : true },
  { label: 'Email', fieldName: 'Email', type: 'email', editable : true },
  { label: 'Title', fieldName: 'Title', editable : true },
  { label: 'Rank', fieldName: 'Rank__c',  editable : true}, 
  {label : 'Lead Source', fieldName : 'LeadSource', type : 'customChanger' ,editable: true ,typeAttributes :{
    catching : {
      fieldName : 'LeadSource'
    },
    matching : {
      fieldName : 'ValuesOfPicklist'
    },
    context:{
      fieldName : 'Id'
    }
  }} 
  
  
];
export default class PracticeUpdatedTable extends LightningElement {
  // It is array of objects that contains change
  draftValues = [];
 wiredResult = {};
  columns = columns;
  @track newvalue = [];
  @track newvalueo = [];
  @track newfox = [];
  picklistvalues;
   
  catchingInfo;
  @api recordId;
  contacts;
 
  @wire(getObjectInfo, { objectApiName: CONTACT }) objectInformation;

  
 
  @wire(getPicklistValues, {
      recordTypeId: '$objectInformation.data.defaultRecordTypeId',
      fieldApiName: LEAD_SOURCE
    }) fox({data,error}){
      if(data){
        this.picklistvalues = data.values;
        console.log('This is the picklist data values',this.picklistvalues);
      }
      else if(error){
        console.log('This is the error',error);
      }
    }

  @wire(updatedClass,{
    accId: '$recordId',
    picklist : '$picklistvalues'
  }) 
  newing(result){
    this.wiredResult = result;
    if(result.data){
      this.contacts = result.data.map((item)=>{
       let ValuesOfPicklist = this.picklistvalues;
        return{
          ...item,
        ValuesOfPicklist
        }
      })

      //console.log('This is the result data',result.data);
     
    }
    else if(result.error){
      console.log(result.error);
    }
    console.log('This is the contact data',this.contacts);
  }
  async handleSave(event){
   
    this.newvalue = event.detail.draftValues;
    console.log('This is the event',this.newvalue);
    this.newvalueo = this.newvalue.map((item)=>{
      return{
        fields : {
          ...item
        }
              
        
      }
      }

      
    );
    
      await this.newvalueo.map((item)=>{
      updateRecord(item);
})
    
   
   console.log("refresh is going to start");
    await refreshApex(this.wiredResult);
    this.draftValues = [];
    
}

}  
    
    
    
  
    





// Array that stores the number of cases 
// Going to that array we can get size of that array
//we will be creating new field that takes number of cases 