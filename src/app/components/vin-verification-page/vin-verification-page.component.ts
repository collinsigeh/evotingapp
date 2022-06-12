import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { VoterService } from '../../services/voter.service';
import { VerifiedVoterService } from 'src/app/services/verified-voter.service';

import Voter from '../../models/voter.model'
import verifiedVoter from 'src/app/models/verified-voter.model';

@Component({
  selector: 'app-vin-verification-page',
  templateUrl: './vin-verification-page.component.html',
  styleUrls: ['./vin-verification-page.component.css']
})
export class VinVerificationPageComponent implements OnInit {

  constructor(
    private voterService: VoterService, 
    private router: Router, 
    private verifiedVoterService: VerifiedVoterService) { }

  ngOnInit(): void {
  }

  vinVerification(form: NgForm): void{
    const vin = form.value.vin;

    this.voterService.getVoter(vin).subscribe(vs => {
      if(vs.length < 1){
        alert("VIN is invalid!");
        return
      }

      // HANDLE FOR VERIFIED VOTERS
      this.verifiedVoterService.getVerifiedVoter(vin).subscribe(vvs => {
        if(vvs.length >= 1 && vvs[0].vin == vin){
          console.log(vvs);
          this.router.navigate(['electable-offices', vs[0].vin, vs[0].voterFor]);
          return;
        }
      });
      // END HANDLE FOR VERIFIED VOTERS
      
      this.router.navigate(['fingerprint-verification', vin]);
    });
  }

}
