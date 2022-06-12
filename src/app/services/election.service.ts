import { Injectable } from '@angular/core';
import Election from '../models/election.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {
  
  private appUrl = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  getAllElections(): Observable<Election[]>{
    return this.http.get<Election[]>(this.appUrl+'/elections');
  }

  getElection(election: string): Observable<Election[]>{
    return this.http.get<Election[]>(this.appUrl+'/elections/?election='+election);
  }
}
