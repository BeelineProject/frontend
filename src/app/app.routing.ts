import { RouterModule,Routes } from "@angular/router";
import { FirstPageComponent } from "./first-page/first-page.component";

import {TrafficSurveyComponent} from "./traffic-survey/traffic-survey.component"
 
const APP_ROUTING : Routes =[
    {path:'survey',component : TrafficSurveyComponent},
    {path:'', component : FirstPageComponent}

]
export const ROUTING = RouterModule.forRoot(APP_ROUTING);