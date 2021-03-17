import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PhotoArchive} from '../interfaces';

@Injectable()
export class PhotoService
{

  constructor(private http: HttpClient) {
  }

  getMainPhoto(id: number): Observable<PhotoArchive>
  {
    return this.http.get<PhotoArchive>('http://localhost:8080/photoArchives/main?informationId='+id);
  }

  getAllPhotosById(id: number[]): Observable<PhotoArchive[]>
  {
    return this.http.post<PhotoArchive[]>('http://localhost:8080/photoArchives/main',id);
  }

}
