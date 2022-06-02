import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { ApiService } from '../api.service';
import { Survey } from '../survey';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-traffic-survey',
  templateUrl: './traffic-survey.component.html',
  styleUrls: ['./traffic-survey.component.css',
              '../../styles.css']
})
export class TrafficSurveyComponent implements OnInit {
  errorMessage='';
  successMessage ='';
  uid : any;
  userEntity:any;
  constructor(private apiService: ApiService,private tokenStorage: TokenStorageService,private user: UserService) { }

  ngOnInit(): void {
    let l =localStorage.getItem('currentUser')!;
    let id = JSON.parse(l).identifier;
    this.user.findOne(id).subscribe(
      (data) => {

     this.userEntity=data;
        this.uid=data.id;
        console.log("inside durvey, got id="+this.uid);
       
      },
        (error) => {
     
        this.errorMessage = `There is a problem connecting to server `;
        console.log(this.errorMessage);
      }
      );
    
  }
  onSubmit(): void {
    
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
      
        console.log("id user0"+this.uid);
        console.log("in on submit");
        const {username,email,password}=this.userEntity;
        const points=Number(this.userEntity.points)+1;
        const dto={username,email,password,points}
        this.user.updateUser(this.uid,dto).subscribe({
          next:data=>{
            console.log(data);
          }
        });
        console.log("after update");
      this.successMessage = `Thank you for making the street a better place`
    }, 
    (error) => {
      this.errorMessage = `There is a problem connecting to server `;
      console.log(this.errorMessage);
    }
    );
  }

}
