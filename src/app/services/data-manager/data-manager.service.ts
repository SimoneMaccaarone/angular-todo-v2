import { Injectable } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        title: 'Regalo alla Nonna',
        description: 'compra il profumo che le piace tanto',
        priority: 2
      },
      {
        title: 'Compra il pane',
        priority: 1
      },
      {
        title: 'Cucinare la Coca',
        description: 'beh che dire...',
        priority: 3
      },
      {
        title: 'Mangiare i sassi',
        priority: 1
      }
    ]
  }


  //--- function AddTodo ---
  addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
  }

  //--- function deleteTodo ---
  deleteTodo(todoToDelete: Todo){
    console.log('Devo cancellare',todoToDelete.title);
    this.todos= this.todos?.filter(t => t.title !== todoToDelete.title); // La Filter() dice cosa tenere; tieni tutti i todo che sono diversi dal TODO.title che è arrivato

  }
}
