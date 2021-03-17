import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AuthResponse, User, User1} from '../../../shared/interfaces';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthUserService
{
  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  get token(): string
  {
    const expDate = new Date(localStorage.getItem('token-exp'))
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('token-id')
  }

  login(user: User1): Observable<any>
  {
    return this.http.post(`http://localhost:8080/auth/login`, user)
      .pipe(
        tap(this.setToken),
      )
  }

  create(user: User): Observable<any>
  {
    return this.http.post(`http://localhost:8080/auth/registration`, user);
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
      const expDate = new Date(new Date().getTime() + 3600 * 1000);
      localStorage.setItem('token-id', response.token);
      localStorage.setItem('username', response.username);
      localStorage.setItem('token-exp', response.username);
    }
    else{
      localStorage.clear()
    }
  }
}
