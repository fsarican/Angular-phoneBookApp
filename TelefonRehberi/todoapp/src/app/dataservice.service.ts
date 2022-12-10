import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Registry } from './Registry';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }

  _url='http://localhost:21262/api/';
  getAll():Observable<Registry[]>
  {
    return this.http.get<Registry[]>(this._url+'kisiler');
  }

  getName(name:string):Observable<Registry[]>
  {
    const params=new HttpParams().set('name',name);
    return this.http.get<Registry[]>(this._url+'kisiler/getbyname/',{params})
  }

  AddRegistry(reg:Registry):Observable<Registry>
  {
    return this.http.post<Registry>(this._url+'kisiler/',JSON.stringify(reg));
  }

  updateRegistry(reg:Registry):Observable<Registry>
  {
    return this.http.put<Registry>(this._url+'kisiler/'+reg.id,JSON.stringify(reg));
  }

  deleteRegistry(reg:Registry):Observable<Registry>
  {
    return this.http.delete<Registry>(this._url+'kisiler/'+reg.id);
  }

}
