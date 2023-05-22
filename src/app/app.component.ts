import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoAddComponent } from './components/todo-add/todo-add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title= 'angular todo'
isDark = true;

constructor(public dialog: MatDialog){

}

openModal(){
  this.dialog.open(TodoAddComponent)
}

changeTheme(){
document.body.classList.toggle('light-mode');
this.isDark = !this.isDark;

}


}
