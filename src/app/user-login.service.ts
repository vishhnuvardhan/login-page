import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  private baseUrl='http://localhost:8080/auth';

  constructor(private http: HttpClient) { }


  login(user) {
    let headers = new HttpHeaders();
    headers=headers.set('Content-Type', 'application/json');
    headers=headers.set('Access-Control-Allow-Origin', '*');
    headers=headers.set('Access-Control-Allow-Methods','GET,POST, OPTIONS');
    headers=headers.set('Access-Control-Allow-Headers','Content-Type ');
    headers=headers.set('Access-Control-Max-Age','86400');
        return this.http.post(this.baseUrl,user,{headers: headers});
  

  }
}
