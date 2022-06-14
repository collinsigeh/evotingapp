import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ElectionService } from 'src/app/services/election.service';
import { CandidateService } from 'src/app/services/candidate.service';
import { VoteService } from 'src/app/services/vote.service';

import Candidate from 'src/app/models/candidate.model';
import { CssSelector } from '@angular/compiler';
import Vote from 'src/app/models/vote.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-election-result-page',
  templateUrl: './election-result-page.component.html',
  styleUrls: ['./election-result-page.component.css']
})
export class ElectionResultPageComponent implements OnInit {
  election: string = '';
  electionDescription: string = '';
  totalVotes: number = 0;
  partyVotes: any = [];

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private electionService: ElectionService,
    private candidateService: CandidateService,
    private voteService: VoteService
    ) {  this.election = this.actRoute.snapshot.params['election']; }

  ngOnInit(): void {
    this.electionService.getElection(this.election).subscribe(es => {
      this.electionDescription = es[0].description;
    });

    this.candidateService.getCandidates(this.election).subscribe(cs => {
      
      cs.forEach(contestingCandidate => {
        let naVote = {partyLogo: '', party: 'partyname', voteGotten: 0};
        naVote.partyLogo = contestingCandidate.partyLogoUrl;
        naVote.party = contestingCandidate.party;
        this.voteService.getPartyVotes(contestingCandidate.party, contestingCandidate.candidateFor).subscribe(pvs => {
          naVote.voteGotten = pvs.length;
        });
        this.partyVotes.push(naVote);
      });
    });

    this.voteService.getVotes
  }

}
