import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor() { }

  notes_array=[];

   getTodo()
  {
     const Notes=localStorage.getItem('Notes')
     return Notes ? JSON.parse(Notes) : [];
    
  }

  create_Todo(value:object)
  {
    this.notes_array = this.getTodo() || [];
     this.notes_array.push(value);
     localStorage.setItem("Notes",JSON.stringify(this.notes_array));
  
  }
 

 delete(name: any) {
   this.notes_array = this.getTodo();
   const notes_new = this.notes_array.filter(note => note.title !== name);
  this.notes_array = notes_new;
  localStorage.setItem("Notes", JSON.stringify(this.notes_array));

}
}
