import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ElectionService } from 'src/app/services/election.service';
import { VoterService } from 'src/app/services/voter.service';
import { VerifiedVoterService } from 'src/app/services/verified-voter.service';

import Election from 'src/app/models/election.model';
import Voter from 'src/app/models/voter.model';

@Component({
  selector: 'app-electable-offices-page',
  templateUrl: './electable-offices-page.component.html',
  styleUrls: ['./electable-offices-page.component.css']
})
export class ElectableOfficesPageComponent implements OnInit {

  vin: string = '0';
  pollingUnit: string = '0';
  elections: Election[] = [];
  voter: Voter[] = [];

  constructor(
    private electionService: ElectionService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private voterService: VoterService, 
    private verifiedVoterService: VerifiedVoterService
    ) {
      this.vin = this.actRoute.snapshot.params['vin'];
      this.pollingUnit = this.actRoute.snapshot.params['pollingUnit'];
     }

  ngOnInit(): void {
    // SAFEGUARD AGAINST UNVERIFIED VOTERS
    this.verifiedVoterService.getVerifiedVoter(this.vin).subscribe(vvs => {
      if(vvs.length < 1 || vvs[0].vin != this.vin){
        this.router.navigate(['vin-verification']);
        return;
      }
    });
    // END SAFEGUARD AGAINST UNVERIFIED VOTERS

    this.electionService.getAllElections().subscribe(es => {
      this.elections = es;
    });
  }

}
