import { LightningElement } from 'lwc';

export default class PrimitiveProperty extends LightningElement {
greeting = 'Magic Starts';
handleClick(event) {
this.greeting = 'Magic Ends';
}}