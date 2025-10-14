import { LightningElement } from 'lwc';
import CRICKET from '@salesforce/resourceUrl/cricket';
import Id from '@salesforce/user/Id';
import HAS_VIEW_ALL_DATA from '@salesforce/userPermission/ViewAllData'
import TEST_LABEL from '@salesforce/label/c.TestLabel';
import NEW_LABEL from '@salesforce/resourceUrl/NewResources';
import {loadStyle} from 'lightning/platformResourceLoader';


export default class StaticResources extends LightningElement {
    cricketImage = CRICKET;
    userId = Id;
    dataPermission = HAS_VIEW_ALL_DATA;
    testLabel = TEST_LABEL;
    firstload = true;
    renderedCallback() {
        if(this.firstload){
            this.firstload = false;
          loadStyle(this, NEW_LABEL)
            .then(() => {
                console.log('script loaded');
            })
            .catch(error => {
                console.log('error in loading script');
            })
        }
    }
}