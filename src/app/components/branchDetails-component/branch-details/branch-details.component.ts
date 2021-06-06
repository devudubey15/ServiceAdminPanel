import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  branchDetail={
    branchCode: 'JMG63581GNF', branchName: 'TSC Service Center', branchAddress:'near ghantaghar, kanpur, up',

    contactDetails: { number: '1230456078', email:'tsc1125@gmail.com' },

    serviceCenterDetail: {
      oName: 'Mahesh pratap singh rajawat', oAddress: 'Birhana road, kanpur, UP', oNumber: '7899633210', oEmail:'gullu25@gmail.com'
    }
  };

}
