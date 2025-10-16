import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
     {
        path:"",redirectTo:"card", pathMatch:"full", title:"Work Item-Think Board"
    },
    {
        path:"card",component:CardComponent, title:"Work Item - Think Board"
    },
    {
        path:"create",component:CreateComponent, title:"Create Item -Think Board"
    },
    // {
    //     path:"edit",component:EditComponent, title:"Edit Item - Think Board"
    // }
];
