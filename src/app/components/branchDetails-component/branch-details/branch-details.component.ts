import { Component, OnInit } from '@angular/core';
import { BranchDetailService} from '../../../services/branch/branch-detail.service';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit {
  public branchData:any;
  totalBillsAmount = 0;
  flag = false;
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
        if( this.branchData?.payment_others?.length <1){
          this.flag = true;
        }
     })
   }

   clearAllBills(){
    //  console.log(this.branchData.payment_others)
     for(var i = 0; i < this.branchData.payment_others.length; i++){
       this.totalBillsAmount += this.branchData.payment_others[i].amount;
     }
    //  console.log(this.totalBillsAmount)
    this.branchData.worth.goods_other_expence += this.totalBillsAmount;
    this.branchData.payment_others = [];
    this.branchService.updateBranchDetail(localStorage.getItem("Auth_id"), this.branchData);
   }

}
