import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Vote from 'src/app/models/vote.model';
import Candidate from 'src/app/models/candidate.model';
import { VoteService } from 'src/app/services/vote.service';
import { VerifiedVoterService } from 'src/app/services/verified-voter.service';
import { ElectionService } from 'src/app/services/election.service';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-vote-confirmation-page',
  templateUrl: './vote-confirmation-page.component.html',
  styleUrls: ['./vote-confirmation-page.component.css']
})
export class VoteConfirmationPageComponent implements OnInit {

  vin: string = '0';
  election: string = '0';
  electionDescription: string = '';
  party: string = '';
  partyLogoUrl: string = '';
  pollingUnit: string = '';
  candidate: Candidate[] = [];

  constructor(
    private candidateService: CandidateService,
    private electionService: ElectionService,
    private voteService: VoteService,
    private verifiedVoterService: VerifiedVoterService,
    private actRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.vin = this.actRoute.snapshot.params['vin'];
    this.party = this.actRoute.snapshot.params['party'];
   }

  ngOnInit(): void {
    // SAFEGUARD AGAINST UNVERIFIED VOTERS
    this.verifiedVoterService.getVerifiedVoter(this.vin).subscribe(vvs => {
      if(vvs.length < 1 || vvs[0].vin != this.vin){
        this.router.navigate(['vin-verification']);
        return;
      }
      this.pollingUnit = vvs[0].pollingUnit;
      this.election = vvs[0].votingFor;
      
      this.electionService.getElection(this.election).subscribe(es => {
        this.electionDescription = es[0].description;
      });
      
      this.candidateService.getCandidate(this.party).subscribe(cs => {
        this.partyLogoUrl = cs[0].partyLogoUrl;
      });
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
  }

  saveVote(form: NgForm): void{

    const voteFor = this.election;
    const vin = this.vin;
    const pollingUnit = this.pollingUnit;
    const votedParty = this.party;
    const votedAt = 'Election day';

    const newVote = new Vote(voteFor, vin, pollingUnit, votedParty, votedAt);

    this.voteService.addVote(newVote).subscribe(nvs => {
      alert('Vote submited successfully!');
      this.router.navigate(['electable-offices', this.vin, this.pollingUnit]);
    });
  }

}
