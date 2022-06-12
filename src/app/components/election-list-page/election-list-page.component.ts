import { Component, OnInit } from '@angular/core';
import Election from 'src/app/models/election.model';
import { ElectionService } from 'src/app/services/election.service';

@Component({
  selector: 'app-election-list-page',
  templateUrl: './election-list-page.component.html',
  styleUrls: ['./election-list-page.component.css']
})
export class ElectionListPageComponent implements OnInit {

  elections: Election[] = [];

  constructor(private electionService: ElectionService) { }

  ngOnInit(): void {
    this.electionService.getAllElections().subscribe(es => {
      this.elections = es;
    });
  }

}
