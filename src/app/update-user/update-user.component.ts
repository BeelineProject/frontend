import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  form: any ;
  uid:any;
  user:any;
  isSuccessful = false;
  isupdateFailed = false;
  errorMessage = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
   
    let l =localStorage.getItem('currentUser')!;
    let id = JSON.parse(l).identifier;
    console.log(id);
    this.userService.findOne(id).subscribe(
      (data) => {
 this.user=data;
 
 const {username,email,password}=data;
 this.form={username,email,password};
this.form.password="";
     console.log(this.user);
     console.log(this.user.email);
        this.uid=data.id;
       
      },
        (error) => {
  
        this.errorMessage = `There is a problem connecting to server `;
        console.log(this.errorMessage);
      }
      );
  }
  onSubmit():void{
    const myformData = this.form;
    if(this.form.password==""){
      myformData.password=this.user.password;
    }
    console.log("before update"+myformData);
     this.userService.updateUser(this.uid,myformData).subscribe({
       next: data => {
       
        console.log("in submit"+data);
         this.isSuccessful = true;
         this.isupdateFailed = false;
         localStorage.setItem('currentUser', JSON.stringify({ identifier:myformData.username }));
         window.location.replace("profile");
       },
       error: err => {
        console.log("error");
         this.errorMessage = err.error.message;
         this.isupdateFailed = true;
       }
     });
  }
  reloadPage(): void {
    window.location.replace("");
  }

}
