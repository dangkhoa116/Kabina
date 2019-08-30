import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../components/user/IUser';
import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<IUser[]> {
    let apiURL = 'https://api.github.com/users';
    return this.http.get<IUser[]>(apiURL);
  }
}
