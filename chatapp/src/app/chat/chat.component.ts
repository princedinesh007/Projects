import { Component } from '@angular/core';
import { Firestore, collection, addDoc, serverTimestamp,onSnapshot, query, orderBy } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { ChatserviceService } from '../chatservice.service';
@Component({
  selector: 'app-chat',
  imports: [CommonModule,FormsModule,],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
   chatMessage: any;
  messageRef: any;
  queryMessage:any;
  messages:any=[];
  authUser:any;
 constructor(public auth:AuthService,private fireAuth: Auth,private chatService:ChatserviceService)
  {
    this.authUser=localStorage.getItem("displayName")
    
    this.chatService.getMessages((msgs) => {
      this.messages = msgs;
    })
  }

    chat() {
      this.authUser=localStorage.getItem("displayName");
      this.chatService.sendMessage(this.chatMessage, this.authUser);
      this.chatMessage = '';
    
  }

  signout() {
    this.auth.signout();
  }
}
