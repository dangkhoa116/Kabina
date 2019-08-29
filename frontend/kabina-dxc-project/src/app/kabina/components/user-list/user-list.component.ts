import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserListService } from '../../services/user-list.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  public users = [];
  config: any;
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  constructor(private _userService: UserListService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(data => this.users = data);
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.users.length
    };
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
}
