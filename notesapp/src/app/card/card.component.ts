import { Component } from '@angular/core';
import { NotesServiceService } from '../notes-service.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(public notes:NotesServiceService,private toastr: ToastrService){}
today=new Date();
  notes_data:any;
  ngOnInit()
  {
    this.getNotesData();
  }

  getNotesData()
  {
    this.notes_data=this.notes.getTodo();

  }
  
  deleteNotesData(item:any)
  {
    this.notes.delete(item);
    this.getNotesData();
    this.toastr.error("",'Note Deleted',{
      positionClass:'toast-center-center',
    
    }) 
  }

}
