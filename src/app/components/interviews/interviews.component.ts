import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RecruiterPortalService } from 'src/app/services/recruiter-portal.service';

export interface UserData {
  interview: string;
  interviewer: string;
  date: string;
  result: string;
}


@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit, OnChanges{

  displayedColumns: string[] = ['interview', 'interviewer', 'date', 'result'];
  dataSource: MatTableDataSource<UserData>;
  @Input() interviewDetails: any;

  constructor(private recruiterPortalService: RecruiterPortalService) {
  }

  ngOnInit() {

  }
  ngOnChanges() {
    console.log(this.interviewDetails);
    this.dataSource = new MatTableDataSource(this.interviewDetails);
  }

}
