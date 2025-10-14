import { LightningElement , track, wire} from 'lwc';
import newDetails from '@salesforce/apex/Detali.Detali';

const columns = [
  { label: 'Name', 
      type: 'customName',
    typeAttributes:{
    nothing :{
      fieldName: "Name",
    }
  } },
  { label: 'Title', fieldName: 'Title', cellAttributes:{
    class: {
      fieldName: 'titlecolor'
    }
  } },
  { label: 'Phone', fieldName: 'Phone', type: 'phone' },
  { label: 'Rank', fieldName: 'Rank__c'},
  { label: 'Email', fieldName: 'Email'},
  
  

  { label: 'Account Name', fieldName: 'Accountid', type : 'url',
    typeAttributes: {
      label: { fieldName: 'AccountNeme' },
      target: '_blank',}
  },
  { label: 'Picture', type: 'customPicture',
    typeAttributes:{
    pictureUrl: {
      fieldName: 'Picture__c',
    }
  }},
];
export default class NormalDatatable extends LightningElement {
@track getContacts = [];
@track newContacts = [];
  columns = columns;
@wire(newDetails)NewDetails({data,error}){
if(data){


  this.getContacts = data.map((item)=>{
  let AccountNeme = item.Account.Name;
  let Accountid = "/" + item.Account.Id;
  let titlecolor = "slds-text-color_success";
  return {
    ...item,AccountNeme,Accountid,titlecolor
  }
});

console.log('This is the data',this.getContacts);
}
else if(error){
console.log('This is the error',error);
}
}

}

