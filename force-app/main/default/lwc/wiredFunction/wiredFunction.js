import { LightningElement,wire} from 'lwc';
import getDetails from '@salesforce/apex/PontactList.fetchDetails';
const columns = [
  { label: 'Account Name', fieldName: 'Name' },
  
  { label: 'Phone', fieldName: 'Phone'},
  
];
export default class WiredFunction extends LightningElement {
  columns = columns;
   arrayDetails = [];
    @wire(getDetails) NewDetails({data,error}){
      
        if(data){
        console.log('Observational ',data);
      let  updatedArray =  data.map((item)=>{
       let rec = { ...item };
            if(rec.Name === "Edge Communications"){
              rec.Phone = '1234566789';
               
            
            }
            return rec;
            
          });
          this.arrayDetails = updatedArray;
        }else if(error){
            console.log(error);

    }
}

}