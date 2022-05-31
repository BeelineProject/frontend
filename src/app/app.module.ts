import { NgModule } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TrafficSurveyComponent } from './traffic-survey/traffic-survey.component';
import { HttpClientModule } from '@angular/common/http';

import { FirstPageComponent } from './first-page/first-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
