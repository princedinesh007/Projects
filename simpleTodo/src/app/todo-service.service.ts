import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }
  TodoList:any=[];

  getTodo()
  {
    const data=localStorage.getItem("ToDoList");
    return  JSON.parse(data);
    
  }
  createTodo(item:any)
  {
    
    this.TodoList.push(item);
    localStorage.setItem("ToDoList",JSON.stringify(this.TodoList));
    this.getTodo();
  }
  
  deleteTodo(id:any)
  {
  const deleteItem= this.getTodo();
  this.TodoList=deleteItem.filter((item)=>item.id !==id);
  localStorage.setItem("ToDoList",JSON.stringify(this.TodoList));
    
  }
  UpdateTodo(data:any){
   const todos = this.getTodo();
  const index = todos.findIndex(item => item.id === data.id);
  if (index !== -1) {
    todos[index].title = data.title;
    localStorage.setItem("ToDoList", JSON.stringify(todos));
  }

  }
}
