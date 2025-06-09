import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, updateProfile  } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   userName:any;

  constructor(public fireAuth:Auth,public http:HttpClient,public router:Router) {
    onAuthStateChanged(this.fireAuth, (user) => {
    if (user) {
      this.userName = user.displayName || user.email;
      localStorage.setItem('userName', this.userName || '');
    } else {
      this.userName = null;
      localStorage.removeItem('userName');
    }
  });
   }


   register(email: string, password: string, displayName: string) {
  createUserWithEmailAndPassword(this.fireAuth, email, password)
    .then((res) => {
      const user = res.user;
      return updateProfile(user, { displayName: displayName })
        .then(() => {
          this.router.navigate(['/login']); // redirect after profile is updated
        });
    })
    .catch((error) => {
      console.error('Registration error:', error);
    });
}


  login(email: string, password: string) {
     signInWithEmailAndPassword(this.fireAuth,email,password).then(async(res)=>{
        const user = res.user;
        await user.reload();
       this.userName=user.displayName;
      //  console.log(this.userName,"displayNAme")
       localStorage.setItem("displayName",this.userName)
     },(error)=>{
      console.log(error)
    })
  }

 signout() {
  this.fireAuth.signOut()
    .then(() => {
      console.log('User signed out');
      this.router.navigate(['/login']); 
    })
    .catch((error) => {
      console.error('Sign-out error', error);
    });
}

 

 
}
