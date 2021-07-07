import { LightningElement } from 'lwc';

export default class CreatePrescription extends LightningElement {
    renderedCallback(){
        var frame = document.createElement("iframe");
        frame.setAttribute('name',"iframe_a");
        frame.setAttribute('width', "440");
        frame.setAttribute('height', "390");
        this.template.querySelectorAll('div')[1].appendChild(frame);

    }
    disconnectedCallback(){
        alert("jjjj");
    }
    handleClick(event) {
        event.preventDefault();
    this.template.querySelector('form').submit();

    }
}