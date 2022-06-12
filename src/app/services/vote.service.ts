import { Injectable } from '@angular/core';
import Vote from '../models/vote.model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private appUrl = "http://localhost:5000";

  constructor(private http: HttpClient) { }
  
  getVotes(vin:string, voteFor: string): Observable<Vote[]>{
    return this.http.get<Vote[]>(this.appUrl+'/votes/?vin='+vin+'&voteFor='+voteFor);
  }

  addVote(vote: Vote): Observable<Vote> {
    return this.http.post<Vote>(this.appUrl+'/votes', vote);
  }
}
