import { LightningElement } from 'lwc';

export default class RenderList extends LightningElement {
  contactList = [
          {
            id : 1,
            firstName : 'John',
            secondName : 'Singh',

          },
          {
            id : 2,
            firstName : 'Rahul',
            secondName : 'Singhania',
            

          },
          {
            id : 3,
            firstName : 'Karan',
            secondName : 'Ajula',

          }


  ]

}