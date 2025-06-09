import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';

export const routes: Routes = [
    {
       path:"",redirectTo:"login",pathMatch:"full"
    },
    {
        path:"register",component:RegisterComponent, title:"Register"
    },
    {
        path:"login",component:LoginComponent,title:"Login"
    },
    {
        path:"chat",component:ChatComponent,title:"Chat"
    }
];
