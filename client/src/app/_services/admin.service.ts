import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsersWithRoles(){
    var users = this.http.get<User[]>(this.baseUrl + 'admin/users-with-roles');
    console.log(users);
    return this.http.get<User[]>(this.baseUrl + 'admin/users-with-roles');
  }
}
