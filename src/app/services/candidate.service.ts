import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Candidate from '../models/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  
  private appUrl = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  getCandidates(candidateFor: string): Observable<Candidate[]>{
    return this.http.get<Candidate[]>(this.appUrl+'/candidates/?candidateFor='+candidateFor);
  }

  getCandidate(party: string): Observable<Candidate[]>{
    return this.http.get<Candidate[]>(this.appUrl+'/candidates/?party='+party);
  }
}
