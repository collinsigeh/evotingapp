import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { VoteService } from 'src/app/services/vote.service';
import { ElectionService } from 'src/app/services/election.service';
import { CandidateService } from 'src/app/services/candidate.service';
import { VerifiedVoterService } from 'src/app/services/verified-voter.service';

import Election from 'src/app/models/election.model';
import Candidate from 'src/app/models/candidate.model';

@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.css']
})
export class VotePageComponent implements OnInit {
  
  vin: string = '0';
  pollingUnit: string = '0';
  election: string = '0';
  electionDescription: string = '';
  candidates: Candidate[] = [];

  constructor(
    private voteService: VoteService,
    private electionService: ElectionService,
    private candidateService: CandidateService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private verifiedVoterService: VerifiedVoterService
    ) {
      this.vin = this.actRoute.snapshot.params['vin'];
      this.election = this.actRoute.snapshot.params['election'];
     }

  ngOnInit(): void {
    // SAFEGUARD AGAINST UNVERIFIED VOTERS
    this.verifiedVoterService.getVerifiedVoter(this.vin).subscribe(vvs => {
      if(vvs.length < 1 || vvs[0].vin != this.vin){
        this.router.navigate(['vin-verification']);
        return;
      }
      this.pollingUnit = vvs[0].pollingUnit;
    });
    // END SAFEGUARD AGAINST UNVERIFIED VOTERS

    // SAFEGUARD AGAINST REPEAT VOTE
    this.voteService.getVotes(this.vin, this.election).subscribe(vs => {
      if(vs.length >= 1 && vs[0].vin == this.vin){
        alert('You voted earlier for this office.');
        this.router.navigate(['electable-offices', this.vin, this.pollingUnit]);
        return;
      }
    });
    // END SAFEGUARD AGAINST REPEAT VOTE

    this.candidateService.getCandidates(this.election).subscribe(cs => {
      this.candidates = cs;
    });

    this.electionService.getElection(this.election).subscribe(es => {
      this.electionDescription = es[0].description;
    })
  }

}
