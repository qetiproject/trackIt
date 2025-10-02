import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Todo, TodoResultData } from '../models/todo.interface';

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals implements OnInit{
  countSignal = signal(1);

  doubleCountSignal = computed(() => this.countSignal() * 2)
  increment(): void {
    // this.countSignal.set(5) // ცვლის კონკრეტული მნიშვნელობით
    this.countSignal.update(v => v + 1)
  }


  loadingSignal = signal<boolean>(false);
  todosSignal = signal<Todo[]>([]);
  errorSignal = signal<string>('');
  http = inject(HttpClient);
  
  ngOnInit(): void {
    this.getTodosSignal();
  }

  getTodosSignal(): void {
    this.loadingSignal.set(true);
    this.http.get<TodoResultData>(`${environment.baseUrl}/todos`)
      .subscribe({
        next: (result) =>{
          this.todosSignal.set(result.todos)
          this.loadingSignal.set(false)
        },
        error:(err) =>{
          this.errorSignal.set(err);
          this.loadingSignal.set(false);
        }
      })
  }

  // დავალება
  // წამოიღე პროდუქტები https://dummyjson.com/products მისამართიდან, შექმენი proucts component, model რომელშიც დაწერ ობიექტის აღწერას interface, ისე როგორც გაკეთებულია todo.interface.ts-ში მსგავსად მოცემული ობიექტისა.--
  // ვიზუალურად html-ში გამოაჩინე შემდეგი ველები: title,description, category, price, discountPercentage, rating, stock
  // მონაცემები წამოიღე როგორც სტანდარტულად ცვლადში ჩაწერით, ასევე signal-ის გამოყენებით.--
  // გამოაჩინე როგორც loading, ისე errormessage
}
