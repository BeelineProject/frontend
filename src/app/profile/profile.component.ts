import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  userService: any;
  errorMessage='';

  constructor(private token: TokenStorageService,
     private user: UserService) { }

  ngOnInit(): void {
    let l =localStorage.getItem('currentUser')!;
    let id = JSON.parse(l).identifier;
    this.user.findOne(id).subscribe(
      (data) => {

     
        this.currentUser=data;
       
      },
        (error) => {
     
        this.errorMessage = `There is a problem connecting to server `;
        console.log(this.errorMessage);
      }
      );
    
  }
  onSubmit():void{
    
  }
}

