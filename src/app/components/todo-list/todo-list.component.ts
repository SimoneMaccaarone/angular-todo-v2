import { Component} from '@angular/core';
import { DataManagerService } from 'src/app/services/data-manager/data-manager.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

// todoArray?: Todo[] = [];      //default, questa proprieta puo essere riempita tramite l' HTML (input)

constructor(public dataManagerServ: DataManagerService){

}

}
