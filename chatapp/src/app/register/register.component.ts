import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

username='dineh11@gamil.com';
passwrod='212334'
  constructor(public auth:AuthService){
    
  }

 

register()
{
  this.auth.register(this.username,this.passwrod);
}
 login()
 {
  this.auth.login(this.username,this.passwrod)
 }

 onRegister()
 {
  
 }

}
