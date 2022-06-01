import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Survey } from '../survey';
@Component({
  selector: 'app-traffic-survey',
  templateUrl: './traffic-survey.component.html',
  styleUrls: ['./traffic-survey.component.css',
              '../../styles.css']
})
export class TrafficSurveyComponent implements OnInit {
  errorMessage='';
  successMessage ='';
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
  }
  getSurvey(survey : any){
    console.log(survey.addition);
    survey = new Survey(survey.value.location,
                            survey.value.state,
                            survey.value.cause,
                            survey.value.waitingTime,
                            survey.value.addition);

    this.apiService.createSurvey(survey).subscribe(
      (result)=>{
      console.log(result);
      this.successMessage = `Thank you for making the street a better place`
    }, 
    (error) => {
      this.errorMessage = `There is a problem connecting to server `;
      console.log(this.errorMessage);
    }
    );
  }

}
