import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  toggleDone (id:number){
    this.todos.map((v, i) =>{
      if(i == id) {
        v.completed = !v.completed;
        this.todos = this.todos.filter((v,i) => i !== id);
        this.todone.push(v)
      }
        
      // console.log(v)
      else if(i==id && this.todos.length >0){
        this.todos = this.todos.filter((v,i) => i !== id);
        this.todone.push(v)
      }
      
      
      // return v;
    })
  }
  deleteTodo(id:number){
    this.todos = this.todos.filter((v,i) => i !== id);
  }
  deleteTodone(id:number){
    this.todone = this.todone.filter((v,i) => i !== id);
  }
  addTodo(todo: Todo){
    this.todos.push(todo);
  }
  //constructor() { }
  todos:Todo[]=[]
  todone:Todo[]=[]


  ngOnInit(): void {
    this.todos = [
      // {
      //   content:'First Todo',
      //   completed: false
      // },
      // {
      //   content:'Second Todo',
      //   completed: false
      // }
    ]
    this.todone = [

    ]
  }

}
