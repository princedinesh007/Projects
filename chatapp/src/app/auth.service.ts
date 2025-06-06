import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth  } from '@angular/fire/auth';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(public fireAuth:Auth,public http:HttpClient) {
   }


   register(email:any,password:any){
    createUserWithEmailAndPassword(this.fireAuth,email,password).then((res)=>{
      console.log(res)
    },(error)=>{
      console.log(error)
    })
   }

  login(email: string, password: string) {
     signInWithEmailAndPassword(this.fireAuth,email,password).then((res)=>{
      console.log(res)
     },(error)=>{
      console.log(error)
    })
  }

 

 
}
