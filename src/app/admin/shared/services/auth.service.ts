import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {AuthResponse, User1} from '../../../shared/interfaces';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class AuthService {

  url1 = "http://26.19.219.240:8080";
  url = "http://localhost:8080";
  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {
  }

  get token(): string
  {
    return localStorage.getItem('token-id')
  }

  login(user: User1): Observable<any>
  {
    return this.http.post(`http://localhost:8080/auth/login`, user)
      .pipe(
        tap(this.setToken),
      )
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthentificated(): boolean {
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse)
  {
    const {message} = error.error.error;
    switch (message)
    {
      case 'INVALID_EMAIL':
        this.error$.next('Неверный email')
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Неверный пароль')
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Такого email нет')
        break;
    }

    return throwError(message);
  }

  private setToken(response: AuthResponse | null): void {
    if (response) {
      localStorage.setItem('token-id', response.token);
      localStorage.setItem('username', response.username);
    }
    else{
      localStorage.clear()
    }
  }
}
