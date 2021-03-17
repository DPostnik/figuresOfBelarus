import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Information} from '../interfaces';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class InfoService
{
  url1 = "http://26.19.219.240:8080";
  url = "http://localhost:8080";
  header = new HttpHeaders().set('Authorization', `Bearer_${localStorage.getItem('token-id')}`);

  constructor(
    private http: HttpClient
  ) {
  }

  getAllInfo(): Observable<Information[]>
  {
    return this.http.get<Information[]>(`${this.url}/information`);
  }

  getInfoById(id: number): Observable<Information>
  {
    return this.http.get<Information>(`${this.url}/information/` + id);
  }

  postInfo(info: Information): Observable<Information>
  {

    return this.http.post<Information>(`${this.url}/information`, info,{headers: this.header});
  }

  putInfo(info: Information): Observable<Information>
  {
    return this.http.put<Information>(`${this.url}/information/`, info,{headers: this.header});
  }

  deleteInfo(id: number): Observable<void>
  {
    return this.http.delete<void>(`${this.url}/information/` + id,{headers: this.header});
  }

}
