import { newArray } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { identity } from 'rxjs';
import { ApiService } from '../api.service';
import { Survey } from '../survey';
import { allSurvey } from '../traffic-survey/allSurvey';
import { dateEntity } from '../traffic-survey/date';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    isAdmin = false;
    role : any;
    count ={};
    countDate = {};
    errorMessage='';
    date = new dateEntity(new Date());
    dateJson = JSON.stringify(this.date);
    deleted='';
    headers = [
      "location",
      "state",
      "cause",
      "addition",
      "id",
      "isValidated",
      "created_at", 
      
      "waitingTime"
       ];   
       @Input()
       surveys :any = []; 

  constructor(private apiService: ApiService, private userService: UserService) { }

  ngOnInit(): void {
      let l =localStorage.getItem('currentUser')!;
    let id = JSON.parse(l).identifier;

    this.userService.findOne(id).subscribe(
      (res)=>{
        this.role = res.role;
        this.isAdmin=(this.role=='ROLE:ADMIN');
        console.log(this.isAdmin)
       
      }, 
      (error) => {
        this.errorMessage = `There is a problem connecting to server `;
        console.log(this.errorMessage);
      }
    );
   
   
    this.apiService.findAll().subscribe(
    (result)=>{
      this.surveys=result;
    
      console.log(result);
    }, 
    (error) => {
      this.errorMessage = `There is a problem connecting to server `;
      console.log(this.errorMessage);
    }
   );
    this.apiService.count().subscribe(
    (result)=>{
      console.log(this.dateJson);
      this.count= result;
    }, 
    (error) => {
      this.errorMessage = `There is a problem connecting to server `;
      console.log(this.errorMessage);
    }
   );
  
 
}

delete(id:string){
  alert("are you sure you want to delete this ?")
  this.apiService.delete(id).subscribe(
    (result)=>{

      this.deleted=id;
    }, 
    (error) => {
      this.errorMessage = `There is a problem connecting to server `;
      console.log(this.errorMessage);
    }
    
   );
   window.location.reload;
}
onclick (){ 
  alert("are you sure you want to delete this ?")
}

}
