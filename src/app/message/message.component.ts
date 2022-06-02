import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  isAdmin = false;
    role : any;
    errorMessage='';
    headers = [
      "name",
      "email",
      "message",
      "id"
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
  
   
   
    this.apiService.findMessages().subscribe(
    (result)=>{
      this.surveys=result;
    
      console.log(result);
    }, 
    (error) => {
      this.errorMessage = `There is a problem connecting to server `;
      console.log(this.errorMessage);
    }
   );

}}
