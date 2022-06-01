import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  isAdmin = false;
  role : any;
  count ={};
    countDate = {};
    errorMessage='';
    deleted='';
    headers = [
      "username",
      "email"
       ];   
       @Input()
       surveys :any = []; 

  constructor(private apiService: UserService) { }

  ngOnInit(): void {
    let l =localStorage.getItem('currentUser')!;
    let id = JSON.parse(l).identifier;

    this.apiService.findOne(id).subscribe(
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
    this.apiService.getAll().subscribe(
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
