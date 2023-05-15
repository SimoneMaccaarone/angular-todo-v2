import { Component} from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { DataManagerService } from 'src/app/services/data-manager/data-manager.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

todoArray?: Todo[] = [];      //default, questa proprieta puo essere riempita tramite l' HTML (input)

constructor(private dataManagerServ: DataManagerService){

}

}
