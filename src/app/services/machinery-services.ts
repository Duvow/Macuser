import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MachineryResponse } from '../model/machinery-response';

@Injectable({
  providedIn: 'root',
})
export class MachineryServices {
  private baseUrl = 'https://reqres.in/api/';
  private headers = new HttpHeaders()
    .set('x-api-key', 'reqres-free-v1');

  constructor(private http: HttpClient) { }

  getMachinery(page: number, perPage: number): Observable<MachineryResponse> {
    const params = new HttpParams()
      .set('page', page)
      .set('per_page', perPage);
    return this.http.get<MachineryResponse>(this.baseUrl + 'machinery', { params, headers: this.headers });
  }
}
