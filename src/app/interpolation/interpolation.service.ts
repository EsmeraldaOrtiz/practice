import { Injectable } from '@angular/core';
import { IPeople } from './interpolation';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
    providedIn: 'root'
})

export class InterpolationService{
    private peopleUrl = 'api/peoples/peoples.json';
constructor(private http: HttpClient) {}

    getPeoples(): Observable<IPeople[]> {
    
        return this.http.get<IPeople[]>(this.peopleUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
         let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = 'An error ocurred: ${err.error.message}';
        } else {
            errorMessage = 'Server returned code: ${err.status}, error message is: ${err.message}';
        }
        console.error(errorMessage);
        return throwError(errorMessage);
        }
}