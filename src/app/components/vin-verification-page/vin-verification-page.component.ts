import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Voter from '../../models/voter.model'
import { VoterService } from '../../services/voter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vin-verification-page',
  templateUrl: './vin-verification-page.component.html',
  styleUrls: ['./vin-verification-page.component.css']
})
export class VinVerificationPageComponent implements OnInit {

  constructor(private voterService: VoterService, private router: Router) { }

  ngOnInit(): void {
  }

  vinVerification(form: NgForm): void{
    const vin = form.value.vin;

    this.voterService.getVoter(vin).subscribe(vs => {
      if(vs.length < 1){
        alert("VIN is invalid!");
        return
      }
      if(vs[0].isVerified){
        this.router.navigate(['electable-offices']);
        return
      }
      this.router.navigate(['fingerprint-verification']);
    });
  }

}
