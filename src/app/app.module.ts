
//import { authInterceptorProviders } from 'src/_helpers/auth.interceptor';

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
 // providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
