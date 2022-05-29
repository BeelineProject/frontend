import { NgModule } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TrafficSurveyComponent } from './traffic-survey/traffic-survey.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TrafficSurveyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ROUTING,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
