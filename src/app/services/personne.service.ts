import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  url:string="http://localhost:8000/ws/personnes";
  headers:HttpHeaders;

  constructor(private http:HttpClient) {
    const token =localStorage.getItem('token');
    this.headers= new HttpHeaders().set('Authorization','Bearer'+token)
   }
  getAll(){
    return this.http.get(this.url,{headers:this.headers})



  }
  addPerson(p:Personne){
    return this.http.post(this.url,p,{ headers: this.headers });
  }
}
