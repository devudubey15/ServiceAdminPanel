import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
 
})
export class PaymentComponent implements OnInit {

  constructor() {
   }
  ngOnInit(): void {
  }
  employeePaymentDetail=false;
  formIf=true;
  sallaryCalculation=true;
  dailyWage=500;
  totalAmount = 0;
  paidleave= this.dailyWage;
  unpaidleave=0;
  fullday= this.dailyWage;
  halfday=  this.dailyWage/2;
  currentDate = new Date();
 
  
  paymentForm(){
    this.employeePaymentDetail=true;
    this.formIf=false;
  }
  backToEmployeePayment(){
    this.employeePaymentDetail = false;
    this.formIf = true;
    this.sallaryCalculation = true;
  }
  sallaryCountObj={
    employeeid: '',
    name: '',
    email: '',
    number: '',
    attendance: [],
    bankname: '',
    accountno: '',
    ifgcno: '',
    
  }

  sallaryCount(data:any)
  {
    this.totalAmount = 0;
    this.employeePaymentDetail = true;
    this.formIf = true;
    this.sallaryCalculation = false;
    this.sallaryCountObj=data;
    for(var i=0; i<data.attendance.length;i++){
      switch(data.attendance[i]){
        case 'FF':
                   this.totalAmount+=this.fullday;
                   break;
        case 'HF':
          this.totalAmount+=this.halfday;
          break;
        case 'UPL':
              this.totalAmount+=this.unpaidleave;
              break;
        case 'PL':
          this.totalAmount+=this.paidleave;
      }
    }
    console.log(this.totalAmount);

  }

  allEmployeesDetail: any = [
    {
      employeeid: 'ahoah', 
      name: 'rana ranjeet singh rajawat', 
      email: 'ranjeetsingh1978@gmail.com',
      number: '+911234567890', 
      attendance: ['HF','HF','HF','HF','HF','HF', 'HF', 'FF','PL', 'UPL', 'HF', 'FF','PL', 'UPL', 'HF', 'FF','PL', 'UPL', 'HF', 'FF','PL', 'UPL', 'HF', 'FF','PL', 'UPL', 'HF', 'FF','PL','UPL','HF','FF','FF','HF'],
      bankname : 'SBI',
      accountno :'235689124578',
      ifgcno :'SBIN0001666',
      date:''
    },
    {
      employeeid: 'YOLO',
      name: 'rana ranjeet singh rajawat',
      email: 'ranjeetsingh1978@gmail.com',
      number: '+911234567890',
      attendance: ['PL', 'UPL', 'HF', 'FF', 'PL', 'UPL', 'HF', 'FF', 'PL', 'UPL', 'HF', 'FF', 'PL', 'UPL', 'HF', 'FF', 'PL', 'UPL', 'HF', 'FF', 'PL', 'UPL', 'HF', 'FF', 'PL', 'UPL', 'HF', 'FF', 'PL', 'UPL', 'HF', 'FF', 'FF', 'HF'],
      bankname: 'SBI',
      accountno: '235689124578',
      ifgcno: 'SBIN0001666',
      date: ''
    },
    {
      employeeid: 'XoXo',
      name: 'rana ranjeet singh rajawat',
      email: 'ranjeetsingh1978@gmail.com',
      number: '+911234567890',
      attendance: ['PL', 'UPL', 'HF', 'FF', 'PL', 'UPL', 'HF', 'FF', 'PL', 'UPL', 'HF', 'FF', 'PL', 'UPL', 'HF', 'FF', 'PL', 'UPL', 'HF', 'FF', 'PL', 'UPL', 'HF', 'FF', 'PL', 'UPL', 'HF', 'FF', 'PL', 'UPL', 'HF', 'FF', 'FF', 'HF'],
      bankname: 'SBI',
      accountno: '235689124578',
      ifgcno: 'SBIN0001666',
      date: ''
    },
    
  ]
}
