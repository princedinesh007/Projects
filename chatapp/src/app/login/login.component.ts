import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(public auth: AuthService,public router:Router) {
    this.loginForm=new FormGroup({
      email:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required)
    })
  }

  login()
  {
    this.auth.login(this.loginForm.value.email,this.loginForm.value.password);
    this.loginForm.reset()
    this.router.navigate(['/chat'])
  }
}

