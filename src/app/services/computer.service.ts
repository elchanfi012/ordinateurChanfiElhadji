import { Injectable } from '@angular/core';
import { Computer } from '../models/computer';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  computers: Computer[];
  apiURL = 'http://localhost:3000/computers';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  marqueDispo = ["dell", "hp", "apple", "asus"];
  typeDispo = ["portable", "fixe", "tablette hybride"];
  categorieDispo = ["gaming", "bureautique", "premier prix"];

  constructor(private httpClient: HttpClient) {
    this.computers = [];
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    }
    else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getComputers(): Observable<Computer[]> {
    return this.httpClient.get<Computer[]>(this.apiURL).pipe(retry(1), catchError(this.handleError));
  }

  getComputerById(id: number): Observable<Computer> {
    return this.httpClient.get<Computer>(this.apiURL + '/' + id).pipe(retry(1), catchError(this.handleError));
  }

  addComputer(computer: Computer): Observable<Computer> {
    return this.httpClient.post<Computer>(this.apiURL, computer, this.httpOptions).pipe(catchError(this.handleError));
  }

  editComputer(computer: Computer) {
    return this.httpClient.put<Computer>(this.apiURL + '/' + computer.id, computer, this.httpOptions).pipe(catchError(this.handleError));
  }

  removeComputer(computer: Computer): Observable<Computer> {
    return this.httpClient.delete<Computer>(this.apiURL + '/' + computer.id).pipe(retry(1),catchError(this.handleError));
  }
}
