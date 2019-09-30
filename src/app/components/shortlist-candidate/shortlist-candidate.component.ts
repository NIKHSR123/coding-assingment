import { Component, OnInit, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RecruiterPortalService } from 'src/app/services/recruiter-portal.service';

export interface UserData {
  name: string;
  works_at: string;
  exp: string;
  ctc: string;
}


@Component({
  selector: 'app-shortlist-candidate',
  templateUrl: './shortlist-candidate.component.html',
  styleUrls: ['./shortlist-candidate.component.css']
})
export class ShortlistCandidateComponent implements OnInit, OnChanges {

  displayedColumns: string[] = ['name', 'works_at', 'exp', 'ctc'];
  dataSource: MatTableDataSource<UserData>;
  @Input() shortlisted: any;
  interviewData: any;
  interviewDataFlag = true;

  constructor(private recruiterPortalService: RecruiterPortalService) {
    // Assign the data to the data source for the table to render
  }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log(this.shortlisted);
    // this.interviewData = this.shortlisted[0].interviews;
    this.getInterviews(this.shortlisted[0]);
    this.dataSource = new MatTableDataSource(this.shortlisted);
  }
  getInterviews(interviewData) {
    console.log(interviewData);
    this.interviewData = interviewData.interviews;
  }
}
