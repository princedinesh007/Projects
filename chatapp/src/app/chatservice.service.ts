import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  private messageRef: any;

  constructor(private firestore: Firestore) {
    this.messageRef = collection(this.firestore, 'message');
  }

  // 🔁 Listen for new messages (pass a callback)
  getMessages(callback: (messages: any[]) => void) {
    const q = query(this.messageRef, orderBy('createdAt'));
    onSnapshot(q, (querySnapshot) => {
      const messages: any[] = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      callback(messages); // Call the callback with messages
    });
  }

  // ➕ Add a new message
  async sendMessage(chatMsg: string, user: string) {
   
    return await addDoc(this.messageRef, {
      chatMsg,
      createdAt: serverTimestamp(),
      sender: user
    });
  }
}
