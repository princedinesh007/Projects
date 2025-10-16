import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NotesServiceService } from '../notes-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  notes:FormGroup;

  constructor(public router:Router,public notesData:NotesServiceService)
  {
    this.notes=new FormGroup({
      title:new FormControl("",Validators.required),
      description:new FormControl("",Validators.required),
    })
  }
  
  createNote()
  {
     this.notesData.create_Todo(this.notes.value);
     this.notesData.getTodo();
     this.notes.reset();
     this.router.navigate(["/card"]);
    
  }
 
}
