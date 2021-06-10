import { Component, OnInit } from '@angular/core';
import { BranchDetailsService } from 'src/app/services/branch-details.service';
import {BranchDetail} from '../../../interfaces/interface'
@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit {
  public branchData:any;
  constructor(
    private branchService:BranchDetailsService
  ) { 
  }
  
  ngOnInit(): void {
    this.getData(localStorage.getItem("Auth_id"))
  }
  branchDetail={
    branchCode: 'JMG63581GNF', branchName: 'TSC Service Center', branchAddress:'near ghantaghar, kanpur, up',

    contactDetails: { number: '1230456078', email:'tsc1125@gmail.com' },

    serviceCenterDetail: {
      oName: 'Mahesh pratap singh rajawat', oAddress: 'Birhana road, kanpur, UP', oNumber: '7899633210', oEmail:'gullu25@gmail.com'
    }
  };
   getData(id : any){
     this.branchService.getBranchDetail(id).subscribe((res)=>{
      //this.branchData = res[0].payload.doc.data();
        this.branchData = res;
     })
   }

}
