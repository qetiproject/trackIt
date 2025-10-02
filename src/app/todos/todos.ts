import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Todo, TodoResultData } from '../models/todo.interface';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos implements OnInit{
  loading: boolean = false;
  error: string = '';
  todos: Todo[] = [];
  http = inject(HttpClient);
    
  getTodos() {
    this.loading = true;
    this.http.get<TodoResultData>(`${environment.baseUrl}/todos`)
      .subscribe({
        next: (result) => {
          this.todos = result.todos;
          this.loading = false;
        },
        error: (err) => {
          this.error = err.message;
          this.loading = false;
        }
    })
  }

  ngOnInit() {
   this.getTodos();
  }
}

