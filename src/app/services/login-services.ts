import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class LoginServices {
  private baseUrl = 'https://reqres.in/api/';
  private headers = new HttpHeaders()
    .set('x-api-key', 'reqres-free-v1');

  constructor(private http: HttpClient) { }

  login(login:Login): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login', login, {headers: this.headers });
  }
  register(login:Login): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'register', login, {headers: this.headers });
  }
}
