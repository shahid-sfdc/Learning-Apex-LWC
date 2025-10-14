
import  LightningDatatable from 'lightning/datatable';
import customPictureTemplate from './customPicture.html';
import customNameTemplate from './customBatch.html';
import customChangerTemplate from './customPicklist.html'; 
import customEditPicklistTemplate from './customEditPicklist.html'; 


export default class CustomDataType extends LightningDatatable {
static customTypes = {
    customPicture: {
        template: customPictureTemplate,
        standardCellLayout: false,
        typeAttributes: ['pictureUrl']
    },
    customName:{
      template: customNameTemplate,
      standardCellLayout: true,
      typeAttributes: ['nothing'],
  },
  customChanger:{
    template : customChangerTemplate,
    editTemplate : customEditPicklistTemplate,
    standardCellLayout : true,
    typeAttributes : ['catching', 'matching','context'],

  }

    
};
}