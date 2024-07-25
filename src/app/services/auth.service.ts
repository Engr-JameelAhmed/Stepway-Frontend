import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';
import { UserService } from './UserService.service';
import { UserResponse } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:9093';
  private authUrl = 'http://localhost:9090/api';
  private UserBaseUrl = '/user';
  private logged = '/login';


  isLogged: Boolean = false;
  userService: UserService = inject(UserService);

  constructor(private http: HttpClient){}

  createUser(userDetails: User){
    return this.http.post(`${this.baseUrl}/users`, userDetails)
  }
  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`)
  }


  login(user: UserResponse): Observable<any>{
    return this.http.post<any>(`${this.authUrl}${this.logged}`,user);;
  }



  logout(){
    this.isLogged = false;
  }


  isAuthenticated(){
    return this.isLogged;
  }
}
