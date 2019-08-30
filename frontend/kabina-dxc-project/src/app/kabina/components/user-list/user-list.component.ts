import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../services/user-list.service';
import { IUser } from "../user/IUser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  public users: IUser[];
  dtOptions: DataTables.Settings = {};
  constructor(private _userService: UserListService) { }

  ngOnInit() {
    
    this.dtOptions = {
      data: this.users,
      pagingType: 'full_numbers',
      
    };
    this._userService.getUsers().subscribe(data => this.users = data);
  }
  
}
