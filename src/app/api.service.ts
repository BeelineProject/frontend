import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Survey } from './survey';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_SERVER = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }
  public createSurvey(survey: Survey){
    return this.httpClient.post<Survey>(`${this.API_SERVER}/survey`, survey);
  }
}
