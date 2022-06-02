import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css',
               '../../styles.css'
               ]
})
export class NavBarComponent implements OnInit { private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
  role:any;
  errorMessage='';
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor(private tokenStorageService: TokenStorageService, private userService:UserService) { }
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
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      console.log(this.roles)
      
     // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
     // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
 
}
