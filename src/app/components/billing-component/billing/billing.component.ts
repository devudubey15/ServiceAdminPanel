import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import {MembershipService} from '../../../services/membership_service/membership.service';
import {BranchDetailService} from '../../../services/branch/branch-detail.service';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  @ViewChild('pdfTable') pdfTable: ElementRef;
  constructor(
    private __membershipService: MembershipService,
    private __branchService:BranchDetailService
  ) { }

  billgenerate = false;
  partName = null;
  price = null;
  quantity = null;
  index = 0;
  invoice_number = null;
  date = null;
  total =0;
  tax=0;
  branchDetail:any = {};
  membesrShipDetail :any = {};
  memberShip = false;
  
  partData: any = [

  ]
  
  membershipId(event:any){
    
    this.__membershipService.getMember(event.value).subscribe((result) =>{
      if(result.length <=0){
        alert("Result not Found");
      }else{
        this.membesrShipDetail= result[0];
        this.memberShip = true;
      }
     //  console.log(this.membershipData)
   })
  }
  getBranchDetail(id:any){

    this.__branchService.getBranchDetail(id).subscribe((res)=>{
     
       this.branchDetail = res;
      
    })
  
}

  addDetails() {
    if (this.partName == null || this.price == null || this.quantity == null) {
      alert("Give right value");
      return
    } else {
      this.partData.push({ partName: this.partName, price: this.price, quantity: this.quantity
       });
      this.partName = null;
      this.price = null;
      this.quantity = null;
    }
  }

  ngOnInit(): void {
    this.getBranchDetail(localStorage.getItem("Auth_id"))
  }
  deletedetails(index: any) {
    this.partData.splice(this.index, 1);

  }
  generateBill() {
    if (this.partData.length == 0 || this.invoice_number == null || this.date == null) {
      alert(" PLEASE ENTER THE CORRECT VALUES ");
      return
    }
    this.billgenerate = true;
    for(var i = 0 ; i < this.partData.length; i++ ){
     this.total+=(this.partData[i].price*this.partData[i].quantity);   
    }


    this.tax = (this.total*18)/100;
    this.branchDetail.worth.billing += (this.tax+this.total);
    this.__branchService.updateBranchDetail(localStorage.getItem("Auth_id"), this.branchDetail);
   
  }
  
  
  public downloadAsPDF(event:any) {
    const doc = new jsPDF();
    //  console.log(event.innerHTML);
    //const pdfTable = this.pdfTable.nativeElement;
    
    var html = htmlToPdfmake(event.innerHTML);
     
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open(); 
     
  }



}









