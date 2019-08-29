import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../components/user/IUser';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://api.github.com/users');
  }
}
