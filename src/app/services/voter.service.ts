import { Injectable } from '@angular/core';
import Voter from '../models/voter.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  private appUrl = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  getVoter(vin:string): Observable<Voter[]>{
    return this.http.get<Voter[]>(this.appUrl+'/voters/?vin='+vin);
  }

  updateVoter(voter:Voter): Observable<Voter>{
    return this.http.patch<Voter>(this.appUrl+'/voters/?vin='+voter.vin, voter);
  }
}
