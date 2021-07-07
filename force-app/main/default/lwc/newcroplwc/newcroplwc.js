import { LightningElement } from 'lwc';

export default class SurveysLwc extends LightningElement {
    showWebsite = false;
    isLoading = false;
   
    websiteLabel = 'Show NewCrop.org';
    

    gotowebsite(event){
        this.showWebsite = true;
        this.surveyLabel = 'Show NewCrop';
        this.showSurvey = false;
        if(event.target.label =='Show NewCrop.org')
        {
            this.websiteLabel = 'Hide NewCrop.org';
            this.showWebsite = true;
        }
            
        if(event.target.label =='Hide NewCrop.org')
        {
            this.websiteLabel = 'Show NewCrop.org';
            this.showWebsite = false;
        }
            
    }
   
    
}