import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from "./header/header.component";
import { NgFor } from '@angular/common';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, NgFor, UserComponent, TasksComponent],
})
export class AppComponent {

  users = DUMMY_USERS;

  selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    console.log("return from child component " + id);
    this.selectedUserId = id;
  }


}
