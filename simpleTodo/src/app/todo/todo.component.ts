import { Component } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todo_data: any = [];
  todo_item: any;
  isEditMode: boolean = false;
  editId: any;
  constructor(public todo: TodoServiceService) { }

  create() {
    const uniqueId = Math.floor(Date.now() + Math.random() * 1000);
    this.todo.createTodo({ id: uniqueId, title: this.todo_item });
    console.log(this.todo_data);
    this.getTodoList();
    this.todo_item = ''
  }

  getTodoList() {
    return this.todo.getTodo();
  }
  edit(item) {
    this.isEditMode = true;
    this.todo_item = item.title;
    this.editId = item.id;
  }
  update() {
    if (this.editId) {
      this.todo.UpdateTodo({ id: this.editId, title: this.todo_item })
    }
    this.isEditMode = false;
    this.todo_item='';
  }
  delete(delete_item: any) {
    console.log(delete_item.id)
    this.todo.deleteTodo(delete_item.id);
  }

}
