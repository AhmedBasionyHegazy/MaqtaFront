import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, LogInRes } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  logIn(logInData:Login){
    return this.http.post<LogInRes>('Authenticate/login',logInData);
  }
}
