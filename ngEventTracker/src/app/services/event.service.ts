import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // F I E L D S
  private baseUrl = 'http://localhost:8100/api/events';

  // C O N S T R U C T O R
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  // M E T H O D S
  index() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };
    // returns a copy of the array of todos
    return this.http.get<Event[]>(this.baseUrl, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Index Method');
      })
    );
  }

  findByKeyword(keyword: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };
    // returns a copy of the array of todos
    return this.http.get<Event[]>(this.baseUrl + '/search/' + keyword, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Index Method');
      })
    );
  }

  findOne(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };

    return this.http.get<Event>(this.baseUrl + '/' + id, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Index Method');
      })
    );
  }

  create(newEvent: Event) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };

    return this.http.post<Event>(this.baseUrl, newEvent, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Create Method');
      })
    );
  }

  update(id: number, newEvent: Event) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };

    return this.http
      .put<Event>(this.baseUrl + '/' + id, newEvent, httpOptions)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Service Error: Create Method');
        })
      );
  }

  destroy(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };

    return this.http.delete<any>(this.baseUrl + '/' + id, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Create Method');
      })
    );
  }
}
