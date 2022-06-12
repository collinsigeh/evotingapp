import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Voter from '../../models/voter.model'
import { VoterService } from '../../services/voter.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-fingerprint-verification-page',
  templateUrl: './fingerprint-verification-page.component.html',
  styleUrls: ['./fingerprint-verification-page.component.css']
})
export class FingerprintVerificationPageComponent implements OnInit {
  myImage!: Observable<any>;
  base64code!: any;

  vin: string = '0';
  constructor(
    private actRoute: ActivatedRoute,
    private sant: DomSanitizer,
    private voterService: VoterService, 
    private router: Router
  ) { 
    this.vin = this.actRoute.snapshot.params['vin'];
  }

  ngOnInit(): void { }

  fingerprintValidation(form: NgForm): void{
    
    const fingerCode = form.value.myImage;

    console.log(fingerCode);

    this.voterService.getVoter(this.vin).subscribe(vs => {
      if(vs.length < 1){
        alert(this.vin+": is an invalid VIN!");
        return
      }
      if(vs[0].isVerified){
        this.router.navigate(['electable-offices']);
        return
      }

      //change voter status to verified if there's a match then redirect to electable-offices

      //if no match redirect to fingerprint-verification stating fingerprint didn't match


      this.router.navigate(['fingerprint-verification', this.vin]);
    });
  }

  onChange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    
    const file: File = (target.files as FileList)[0];

    console.log(file);

    this.convertToBase64(file);
  }

  convertToBase64 = (file: File) => {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((d) => {
      console.log(d);
      this.myImage = d;
      this.base64code = d;
    })
  }

  readFile(file: File, subscriber: Subscriber<any>){
    const filereader = new FileReader();

    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);

      subscriber.complete();
    }

    filereader.onerror = () => {
      subscriber.error();
      subscriber.complete();
    }
  }

}
