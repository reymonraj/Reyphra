import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { GraphData } from './data';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})

export class GraphComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'place',
    'university',
    'course',
    'type'
  ];
  temp: any;
  search = false;
  a2eOptions: any;
  name: any;
  password: any;
  bookingid: any;
  showPage: any;
  place: any;
  university: any;
  course: any;
  type: any;
  college: any;
  data: any;
  col = [];
  constructor(private graphsData: GraphData, private router: Router) { }

  ngOnInit() {
    this.data = this.graphsData.yearData;
    this.a2eOptions = {
      format: 'MM/DD/YYYY'
    };
  }

  logout() {
    this.router.navigate(['']);
  }
  userForm(value, event) {
    if (event === 'place') {
      this.place = value;
    } else if (event === 'university') {
      this.university = value;
    } else if (event === 'course') {
      this.course = value;
    } else if (event === 'type') {
      this.type = value;
    }
  }
  reset() {
    this.data = this.graphsData.yearData;
    this.search = true;
  }
  filter() {
    this.data = this.graphsData.yearData;
    const collegeData = [];
    for (const val of this.data) {
      if (val.place === this.place && val.university === this.university &&
        val.course === this.course && val.type === this.type) {
    collegeData.push(val);
    console.log(val);
      }
      this.data = collegeData;
    }
  }

}
