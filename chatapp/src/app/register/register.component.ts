import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm:FormGroup;
  constructor(public auth: AuthService,public router:Router) {
    this.registerForm= new FormGroup({
      displayName:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
    })
  }

  register() {
   this.auth.register(this.registerForm.value.email,this.registerForm.value.password,this.registerForm.value.displayName);
   this.registerForm.reset();
   this.router.navigate(['/login'])
  }


}
