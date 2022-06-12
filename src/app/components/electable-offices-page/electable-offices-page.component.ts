import { Component, OnInit } from '@angular/core';
import Election from 'src/app/models/election.model';
import { ElectionService } from 'src/app/services/election.service';

@Component({
  selector: 'app-electable-offices-page',
  templateUrl: './electable-offices-page.component.html',
  styleUrls: ['./electable-offices-page.component.css']
})
export class ElectableOfficesPageComponent implements OnInit {

  elections: Election[] = [];

  constructor(private electionService: ElectionService) { }

  ngOnInit(): void {
    this.electionService.getAllElections().subscribe(es => {
      this.elections = es;
    });
  }

}
