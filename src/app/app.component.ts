import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  href ="";
  isAdmin = false;

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor(private tokenStorageService: TokenStorageService,) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
    this.href = window.location.href;
    this.isAdmin=("http://localhost:4200/admin"==this.href)||(this.href=="http://localhost:4200/admin/user")||(this.href=="http://localhost:4200/admin/message");
  } logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();

  }
}
