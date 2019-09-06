import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { from, Observable } from 'rxjs';
//import { Register } from "../app/register";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Url: string;
  token: string;
  header: any;
  constructor(private http: HttpClient) {

    this.Url = 'http://localhost:49583/api/Login/';  // url when hosting LoginAPI

    const headerSettings: {[name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  Login(model: any) {
    //debugger;
     let a = this.Url + 'Login';
   return this.http.get<any>(this.Url + 'Login', model);
  }
  // , { headers: this.header}
  //  CreateUser(register:Register)
  //  {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.post<Register[]>(this.Url + 'createcontact/', register, httpOptions)
  //  }
}