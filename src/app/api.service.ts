import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Survey } from './survey';
import { dateEntity } from './traffic-survey/date';
const AUTH_API = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_SERVER = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }
  public createSurvey(survey: Survey){
    return this.httpClient.post<Survey>(`${this.API_SERVER}/survey`, survey);
  }
  public findRoute(location: string){
    return this.httpClient.get<Survey>(`${this.API_SERVER}/survey/${location}`);
  }

  public incPoints(id: any){
    return this.httpClient.get(`${this.API_SERVER}/user/inc/${id}`);
  }


  public findAll(){
    return this.httpClient.get<Survey>(`${this.API_SERVER}/survey`);
  }
  public countByDate(date : any){
    console.log('inside countDate');
    return this.httpClient.get(AUTH_API +'survey/count/date', 
      date);
  }
  public count(){
    return this.httpClient.get<Survey>(`${this.API_SERVER}/survey/get/count`);
  }
  public delete(id:string){
    return this.httpClient.delete<Survey>(`${this.API_SERVER}/survey/${id}`);
  }

}

