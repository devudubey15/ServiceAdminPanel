import { Component, OnInit } from '@angular/core';
import { BranchDetailService} from '../../../services/branch/branch-detail.service';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit {
  public branchData:any;
  constructor(
    private branchService: BranchDetailService
  ) { 
  }
  
  ngOnInit(): void {
    this.getData(localStorage.getItem("Auth_id"))
  }
  
   getData(id : any){
     this.branchService.getBranchDetail(id).subscribe((res)=>{
      //this.branchData = res[0].payload.doc.data();
        this.branchData = res;
     })
   }

}
