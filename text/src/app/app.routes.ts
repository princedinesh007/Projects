import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent, title:"Home"
    },
    {
        path:'menu',component:MenuComponent, title:"Pizza Menu"
    },
    {
        path:'about',component:AboutComponent, title:"About Pizza"
    },
    {
        path:'contact',component:ContactComponent, title:"Contact Pizza"
    }
];
