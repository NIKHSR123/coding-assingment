import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RecruiterPortalService } from 'src/app/services/recruiter-portal.service';

export interface UserData {
  company: string;
  title: string;
  date_posted: string;
  status: string;
}

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.css']
})
export class JobPostsComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['Company', 'Title', 'Date Posted', 'Status'];
  dataSource: MatTableDataSource<UserData>;
  shorlistCandidates: [];
  interviewData: any;
  @Input() searchData: any;

  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private recruiterPortalService: RecruiterPortalService) {
  }

  ngOnInit() {
    this.recruiterPortalService.getAllPosts().subscribe(res => {
      console.log(res);
      this.shorlistCandidates = res[0].shortlisted;
      this.dataSource = new MatTableDataSource(res);
    });
  }
  ngOnChanges() {
    console.log(this.dataSource);
    this.dataSource.filter = this.searchData.trim().toLowerCase();
  }
  getShortlistCandidates(shortlistData) {
    console.log(shortlistData.shortlisted);
    this.shorlistCandidates = shortlistData.shortlisted;
  }
}

