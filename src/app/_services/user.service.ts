import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  updateUser(id: any,data:any): Observable<any>{
    console.log("inside update user service");
    return this.http.patch(API_URL +`/${id}`,data, { responseType: 'text' });

  }

  getAll(): Observable<any> {
    return this.http.get(API_URL + '');
  }
  findOne(id: string): Observable<any> {
    return this.http.get(API_URL +`/${id}` );
  }
  count(): Observable<any> {
    return this.http.get(API_URL + '/get/count');
  }
  delete(id: String): Observable<any> {
    return this.http.delete(API_URL +`/${id}` );
  }


}