import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee/employee.service';
import { BranchDetailService } from '../../../services/branch/branch-detail.service'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
 
})
export class PaymentComponent implements OnInit {

  constructor(
    private __branchService:BranchDetailService,
    private __employeeService:EmployeeService
  ) {
   }


  ngOnInit(): void {
    this.getEmployees();
    this.getData(localStorage.getItem("Auth_id"));
  }

  
  getEmployees(){
    this.__employeeService.getEmployees().subscribe((result) =>{
      this.employeeId = [];
      this.employeeList  = result.map(e =>{
        this.employeeId.push(e.payload.doc.id);
        return e.payload.doc.data();
      });  
      this.sortData(this.employeeList, this.employeeId);
    }) 
}
sortData(data:any, id:any){
    this.duePaymentEmpId  = [];
    this.duePaymentEmployeeList = [];
    for(var i=0; i<data.length; i++){
      if(data[i].attendance_detail.length > 0){
          this.duePaymentEmployeeList.push(data[i]);
          this.duePaymentEmpId.push(id[i]);
      }
    }  
}
employeePayment(){
      this.branchData.worth.employee_expence+= this.totalAmount;
      this.__branchService.updateBranchDetail(localStorage.getItem("Auth_id"), this.branchData);
      this.duePaymentEmployeeList[this.index].attendance_detail = [];
      this.__employeeService.updateEmployee(this.duePaymentEmpId[this.index],this.duePaymentEmployeeList[this.index]);
      this.backToEmployeePayment();

}

getData(id : any){
  this.__branchService.getBranchDetail(id).subscribe((res)=>{
   //this.branchData = res[0].payload.doc.data();
     this.branchData = res;
  })
}

otherPayment(){
  this.branchData?.payment_others?.push(this.paymentOthers)
  this.__branchService.updateBranchDetail(localStorage.getItem("Auth_id"), this.branchData)
  this.backToEmployeePayment();
}
  branchData:any = []
  employeeId :any = [];
  employeeList:any = [];
  duePaymentEmployeeList:any = [];
  duePaymentEmpId :any = [];
  employeePaymentDetail=false;
  formIf=true;
  sallaryCalculation=true;
  dailyWage=0;
  totalAmount = 0;
  unpaidleave=0;
  index =0;
  currentDate = new Date();
  paymentOthers :any = {
    payment_type : null,
    paid_to: null,
    invoice_date: null,
    due_date: null,
    amount:0
  };
  
  paymentForm(){
    this.employeePaymentDetail=true;
    this.formIf=false;
  }
  backToEmployeePayment(){
    this.employeePaymentDetail = false;
    this.formIf = true;
    this.sallaryCalculation = true;
  }
  

  sallaryCount( index:any)
  {
    this.totalAmount = 0;
    this.employeePaymentDetail = true;
    this.formIf = true;
    this.sallaryCalculation = false;
    this.index = index;
    this.dailyWage = parseInt(this.duePaymentEmployeeList[index].wage);

    for(var i=0; i<this.duePaymentEmployeeList[index].attendance_detail.length;i++){
      switch(this.duePaymentEmployeeList[index].attendance_detail[i].attendance_status){
        case 'fd':
                   this.totalAmount+=this.dailyWage;
                   break;
        case 'hd':
          this.totalAmount+=this.dailyWage/2;
          break;
        case 'unl':
              this.totalAmount+=this.unpaidleave;
              break;
        case 'pl':
          this.totalAmount+=this.dailyWage;
      }
    }
   

  }

}
