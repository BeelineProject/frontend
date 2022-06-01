import { RouterModule,Routes } from "@angular/router";
import { FirstPageComponent } from "./first-page/first-page.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { RouteCheckingComponent } from "./route-checking/route-checking.component";

import {TrafficSurveyComponent} from "./traffic-survey/traffic-survey.component"
//import { UpdateProfileComponent } from "./update-profile/update-profile.component";
 
const APP_ROUTING : Routes =[
    {path:'survey',component : TrafficSurveyComponent},
    {path:'', component : FirstPageComponent},
    {path:'profile',component : ProfileComponent},
    {path:'route',component : RouteCheckingComponent},
    {path:'login',component : LoginComponent},
    {path:'register',component : RegisterComponent},
   // {path:'updateUser',component : UpdateProfileComponent},

]
export const ROUTING = RouterModule.forRoot(APP_ROUTING);