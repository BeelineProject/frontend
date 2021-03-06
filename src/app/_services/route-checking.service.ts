import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class RouteCheckingService {

  constructor(private http: HttpClient) { }
    getRouteState(route: string): Observable<any> {
      return this.http.get(API_URL + 'survey'+":"+route);
    }
  }

