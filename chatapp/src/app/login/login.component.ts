import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Firestore, collection, addDoc, serverTimestamp,onSnapshot, query, orderBy } from '@angular/fire/firestore';



@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  chatMessage: any;
  messageRef: any;
  queryMessage:any;
  uiData:any=[];
  constructor(public firestore: Firestore) {
 this.messageRef = collection(this.firestore, 'message');
    this.getMessages();
    }

  chat() {
    console.log(this.chatMessage);
   
    addDoc(this.messageRef,{
      chatMsg:this.chatMessage,
      createdAt:serverTimestamp(),
      user:"dK"

    });
    this.chatMessage = '';

  }
    // Get messages from Firestore
  getMessages() {
    const q = query(this.messageRef, orderBy("createdAt"));
    
    onSnapshot(q, (querySnapshot) => {
      this.uiData = []; // Clear current messages
      querySnapshot.forEach((doc) => {
        this.uiData.push(doc.data()); // Push new messages
      });
    });
  }
}


