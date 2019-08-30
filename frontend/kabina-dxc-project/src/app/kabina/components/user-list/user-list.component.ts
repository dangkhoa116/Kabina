import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../services/user-list.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  public users = [];
  dtOptions: DataTables.Settings = {};
  
  constructor(private _userService: UserListService) { }

  ngOnInit() {
    
    this._userService.getUsers().subscribe(data => this.users = data);
    console.log(this.users);
    this.dtOptions = {
      data: this.users,
      columns:  [{title: 'User ID', data: 'id'},
      ]
    };
  }
 
}
