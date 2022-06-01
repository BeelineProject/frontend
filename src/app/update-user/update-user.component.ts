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
  isSuccessful = false;
  isupdateFailed = false;
  errorMessage = '';
  constructor(private userService: UserService,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    const myformData = this.form;
   const user=this.tokenStorage.getUser();
   
   const {id}=user;

    this.userService.updateUser(myformData).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isupdateFailed = false;
        
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isupdateFailed = true;
      }
    });
  }
  reloadPage(): void {
    window.location.replace("");
  }

}
