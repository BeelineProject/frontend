

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { RegisterComponent } from "./register/register.component";
import { RouteCheckingComponent } from './route-checking/route-checking.component';


import { ROUTING } from './app.routing';

import { TrafficSurveyComponent } from './traffic-survey/traffic-survey.component';


import { FirstPageComponent } from './first-page/first-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    RegisterComponent,
 
    LoginComponent,
  
    RouteCheckingComponent

    NavBarComponent,
    TrafficSurveyComponent,
    FirstPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

 

    ROUTING,
    FormsModule,
    HttpClientModule,
    NgbModule
   

  ],
 // providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
