import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../guards/auth-activate";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
   {path: 'auth', canActivate: [AuthActivate], children: [
        { path: 'login', component: LoginComponent, canActivate: [AuthActivate],  data: { title:'Login', loginRequired: false } },
        { path: 'register', component: RegisterComponent, canActivate: [AuthActivate], data: { title:'Register', loginRequired: false} },
        { path: 'profile', component: ProfileComponent, canActivate: [AuthActivate], data: { title:'Profile', loginRequired: true} },
        { path: 'logout', component: LogoutComponent, canActivate: [AuthActivate], data: { title:'Logout', loginRequired: true} },
        { path: 'user/:id', component: UserComponent }
     ]}
    ];

export const AuthRoutingModule = RouterModule.forChild(routes)