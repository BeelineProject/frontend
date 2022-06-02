import { RouterModule,Routes } from "@angular/router";
import { AdminUsersComponent } from "./admin-users/admin-users.component";
import { AdminComponent } from "./admin/admin.component";
import { FirstPageComponent } from "./first-page/first-page.component";
import { LoginComponent } from "./login/login.component";
import { MessageComponent } from "./message/message.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { RouteCheckingComponent } from "./route-checking/route-checking.component";

import {TrafficSurveyComponent} from "./traffic-survey/traffic-survey.component"
import { UpdateUserComponent } from "./update-user/update-user.component";
//import { UpdateProfileComponent } from "./update-profile/update-profile.component";
 
const APP_ROUTING : Routes =[
    {path:'survey',component : TrafficSurveyComponent},
    {path:'', component : FirstPageComponent},

    {path:'profile',component : ProfileComponent},
    {path:'route',component : RouteCheckingComponent},
    {path:'login',component : LoginComponent},
    {path:'register',component : RegisterComponent},
    {path:'updateUser',component : UpdateUserComponent},

    {path:'admin', component: AdminComponent},
    {path:'admin/user', component: AdminUsersComponent},
    {path:'admin/message', component: MessageComponent},
   




]
export const ROUTING = RouterModule.forRoot(APP_ROUTING);