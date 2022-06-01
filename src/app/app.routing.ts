import { RouterModule,Routes } from "@angular/router";
import { AdminUsersComponent } from "./admin-users/admin-users.component";
import { AdminComponent } from "./admin/admin.component";
import { FirstPageComponent } from "./first-page/first-page.component";

import {TrafficSurveyComponent} from "./traffic-survey/traffic-survey.component"
 
const APP_ROUTING : Routes =[
    {path:'survey',component : TrafficSurveyComponent},
    {path:'', component : FirstPageComponent},
    {path:'admin', component: AdminComponent},
    {path:'admin/user', component: AdminUsersComponent}


]
export const ROUTING = RouterModule.forRoot(APP_ROUTING);