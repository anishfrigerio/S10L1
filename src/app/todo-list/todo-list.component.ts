import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  todo: Todo[] = [];

  constructor() {}

  ngOnInit(): void {
    fetch('../../assets/db.json')
      .then((response: any) => {
        return response.json(); //trasforma la stringa in un json
      })
      .then((data) => {
        this.todo = data;
        console.log(this.todo);
      });
  }
}
