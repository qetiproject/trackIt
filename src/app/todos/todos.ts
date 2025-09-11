import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Todo, TodoResultData } from '../models/todo.interface';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos implements OnInit{

  todos: Todo[] = [];
  http = inject(HttpClient);

  getTodos() {
    this.http.get<TodoResultData>('https://dummyjson.com/todos')
      .subscribe(result => {
        this.todos = result.todos;
        console.log(this.todos)
      })
  }

  ngOnInit() {
   this.getTodos();
  }
}

