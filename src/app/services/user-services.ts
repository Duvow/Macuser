import { Injectable } from '@angular/core';
import { UserResponse } from '../model/user-response';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  private baseUrl = 'https://reqres.in/api/';
  private headers = new HttpHeaders()
      .set('x-api-key', 'reqres-free-v1');

  constructor(private http: HttpClient) { }

  getUsers(page: number, perPage: number): Observable<UserResponse> {
    const params = new HttpParams()
      .set('page', page)
      .set('per_page', perPage);
    return this.http.get<UserResponse>(this.baseUrl+'users', { params, headers: this.headers });
  }
  
}
