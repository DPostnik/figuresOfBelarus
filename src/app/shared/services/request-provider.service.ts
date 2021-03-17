import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bibliography, Chronology, Education, Information, PhotoArchive, Quotation, Relatives, WorkPersonality} from '../interfaces';

@Injectable({
  providedIn: 'root'})
export class RequestProviderService{

  constructor(private http: HttpClient) {
  }

  getInformation(id: string): Observable<Information>
  {
    return this.http.get<Information>('http://localhost:8080/information/' + id);
  }

  getEducation(id: string): Observable<Education>
  {
    return this.http.get<Education>('http://localhost:8080/educations/' + id);
  }

  getChronology(id: string)
  {
    return this.http.get<Chronology[]>('http://localhost:8080/chronologies?informationId=' + id);
  }

  getBibliography(id: string): Observable<Bibliography>
  {
    return this.http.get<Bibliography>('http://localhost:8080/bibliographies/' + id);
  }

  getPhotoArchive(id: string): Observable<PhotoArchive>
  {
    return this.http.get<PhotoArchive>('http://localhost:8080/photoArchieves/' + id);
  }

  getQuotationAboutDoer(id: string): Observable<Quotation>
  {
    return this.http.get<Quotation>('http://localhost:8080/quotations/' + id);
  }

  getQuotation(id: string): Observable<Quotation>
  {
    return this.http.get<Quotation>('http://localhost:8080/quotations/' + id);
  }

  getRelatives(id: string): Observable<Relatives>
  {
    return this.http.get<Relatives>('http://localhost:8080/relatives/' + id);
  }

  getWorkPersonality(id: string): Observable<WorkPersonality>
  {
    return this.http.get<WorkPersonality>('http://localhost:8080/workPersonalities/' + id);
  }

  setInformation(info: Information): Observable<Information>
  {
    // const info: Information =
    // {
    //   achievements: "string",
    //     alias: "string",
    //   attitudeToMarriage: "string",
    //   awards: "string",
    //   biography: "string",
    //   characteristic: "string",
    //   citizenship: "string",
    //   confession: "string",
    //   countryBirth: "string",
    //   countryDeath: "string",
    //   dateBirth: "14.01.1990",
    //   dateDeath: "14.01.1990",
    //   education: "string",
    //   ethnos: "string",
    //   faith: "string",
    //   firstName: "string",
    //   friendsAndEnemies: "string",
    //   lastName: "string",
    //   linksToWebsite: "string",
    //   memberShip: "string",
    //   nationality: "string",
    //   occupation: "string",
    //   patronymic: "string",
    //   placeBirth: "string",
    //   placeBurial: "string",
    //   politic: "string",
    //   profession: "string",
    //   regionBirth: "string"
    // }
    return this.http.post<Information>('http://localhost:8080/information',info);
  }


}
