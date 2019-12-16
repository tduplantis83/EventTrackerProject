import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // F I E L D S
  // private baseUrl = 'http://localhost:8100/api/events';
  private baseUrl = environment.baseUrl;
  private fullUrl = this.baseUrl + 'api/events';

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
    return this.http.get<Event[]>(this.fullUrl, httpOptions).pipe(
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
    return this.http.get<Event[]>(this.fullUrl + '/search/' + keyword, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Index Method');
      })
    );
  }

  findByTitle(title: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };
    // returns a copy of the array of todos
    return this.http.get<Event[]>(this.fullUrl + '/search/title/' + title, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Index Method');
      })
    );
  }

  findByDesc(desc: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };
    // returns a copy of the array of todos
    return this.http.get<Event[]>(this.fullUrl + '/search/description/' + desc, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Index Method');
      })
    );
  }

  findByCat(cat: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };
    // returns a copy of the array of todos
    return this.http.get<Event[]>(this.fullUrl + '/search/category/' + cat, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Index Method');
      })
    );
  }

  findByYear(year: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };
    // returns a copy of the array of todos
    return this.http.get<Event[]>(this.fullUrl + '/search/year/' + year, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Index Method');
      })
    );
  }

  findByLocation(location: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };
    // returns a copy of the array of todos
    return this.http.get<Event[]>(this.fullUrl + '/search/location/' + location, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Index Method');
      })
    );
  }

  findByStreet(street: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };
    // returns a copy of the array of todos
    return this.http.get<Event[]>(this.fullUrl + '/search/street/' + street, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Index Method');
      })
    );
  }

  findByCity(city: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };
    // returns a copy of the array of todos
    return this.http.get<Event[]>(this.fullUrl + '/search/city/' + city, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Index Method');
      })
    );
  }

  findByState(state: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };
    // returns a copy of the array of todos
    return this.http.get<Event[]>(this.fullUrl + '/search/state/' + state, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Index Method');
      })
    );
  }

  findByZip(zip: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };
    // returns a copy of the array of todos
    return this.http.get<Event[]>(this.fullUrl + '/search/zip/' + zip, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Index Method');
      })
    );
  }

  findByDateRange(start: string, end: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };
    // returns a copy of the array of todos
    return this.http.get<Event[]>(this.fullUrl + '/search/dateRange/' + start + '/' + end, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Index Method');
      })
    );
  }

  findByYearMonth(year: string, month: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };
    // returns a copy of the array of todos
    return this.http.get<Event[]>(this.fullUrl + '/search/year/month/' + year + '/' + month, httpOptions).pipe(
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

    return this.http.get<Event>(this.fullUrl + '/' + id, httpOptions).pipe(
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

    return this.http.post<Event>(this.fullUrl, newEvent, httpOptions).pipe(
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
      .put<Event>(this.fullUrl + '/' + id, newEvent, httpOptions)
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

    return this.http.delete<any>(this.fullUrl + '/' + id, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Create Method');
      })
    );
  }
}
