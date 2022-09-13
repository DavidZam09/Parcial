import { Component, OnInit } from '@angular/core';
import { UsersBDService } from 'src/app/services/users-bd.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: any;
  constructor(private userbd: UsersBDService) { }

  ngOnInit(): void {
    this.recuperarTodo()
  }

  recuperarTodo() {
    this.userbd.recuperarTodos().subscribe(data => {
      this.users = data
      console.log(data)
    })
  }

}
