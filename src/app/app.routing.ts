import { RouterModule,Routes } from "@angular/router";
import {TrafficSurveyComponent} from "./traffic-survey/traffic-survey.component"
 
const APP_ROUTING : Routes =[
    {path:'survey',component : TrafficSurveyComponent }

]
export const ROUTING = RouterModule.forRoot(APP_ROUTING);