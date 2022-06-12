import { Injectable } from '@angular/core';
import VerifiedVoter from '../models/verified-voter.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifiedVoterService {

  private appUrl = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  getVerifiedVoter(vin:string): Observable<VerifiedVoter[]>{
    return this.http.get<VerifiedVoter[]>(this.appUrl+'/verifiedVoters/?vin='+vin);
  }

  addVerifiedVoter(newlyVerifiedVoter: VerifiedVoter): Observable<VerifiedVoter> {
    return this.http.post<VerifiedVoter>(this.appUrl+'/verifiedVoters', newlyVerifiedVoter);
  }
}
