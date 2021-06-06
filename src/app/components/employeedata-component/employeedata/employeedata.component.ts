import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employeeBtn = false;
  employeeDetailBtn=true;
  employeeEditBtn = true;
  employeeAddBtn=true;
  attendence =null;
  newEmployeeId:any=null;

  date = null;

  employeeData = {
    empolyeeid: '', name: '', email: '', number: '', address: '', dailywage: '', position: '',
    bankdetails:{ 
      bankName:'',accountNumber:'',IFGC:''
    },
    attendence:[],
     
    
    currentStatusOfPayment:''
    
    
  };

  allEmployeesDetail: any = [
    {
      empolyeeid: 'ahoah', name: 'rana r', email: 'ranjeetsingh1978@gmail.com', number: '+911234567890', address: 'hemant vihar, barra2, kanpur, up, india', dailywage: '₹2000',
      position: 'GM'
    },
    {
      empolyeeid: 'BHK', name: 'rana ranjeet singh rajawat', email: 'ranjeetsingh1978@gmail.com', number: '+911234567890', address: 'hemant vihar, barra2, kanpur, up, india', dailywage: '₹2000',
      position: 'GM'
    },
    {
      empolyeeid: 'gbh', name: 'rana ranjeet singh rajawat', email: 'ranjeetsingh1978@gmail.com', number: '+911234567890', address: 'hemant vihar, barra2, kanpur, up, india', dailywage: '₹2000',
      position: 'GM'
    }
  ]

  addNewEmployee(){

    this.employeeBtn = true;
    this.employeeDetailBtn = true;
    this.employeeEditBtn = true;
    this.employeeAddBtn = false;
    this.newEmployeeId = this.generateString(10);
  }
  saveNewEmployee(){
    console.log(this.employeeData);
    this.employeeBtn = false;
    this.employeeDetailBtn = true;
    this.employeeEditBtn = true;
    this.employeeAddBtn = true;
    
  }

  attendenceData = 
    {attendence:'',date:''}
  
  // saveAttendenceData(index:any){
  //   if (this.attendence==null || this.date==null ) {
  //     alert("Please enter proper values");
  //     return
  //   }
  //   else
  //   {
  //     this.attendenceData.push({attendence:this.attendence,date:this.date});
     
  //   }
 // }
  perticularEmployeedetails(data:any) {
    this.employeeBtn = true;
    this.employeeEditBtn = true;
    this.employeeDetailBtn = false;
    this.employeeData = data;
  }
  perticularEmployeedetailsEdit(){
    this.employeeEditBtn = false;
    this.employeeDetailBtn = true;
    this.employeeBtn = true;
   
  }
  saveEditedDetails()
    {
    
    this.employeeAddBtn = true;
    this.employeeBtn = true;
    this.employeeEditBtn = true;
    this.employeeDetailBtn = false;
    }
  exitBtnInPerticularEployeeDetail()
  {
    this.employeeBtn = false;
    this.employeeDetailBtn = true;
    this.employeeEditBtn = true;

  }
  // program to generate random strings

  // declare all characters
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

 generateString(length:any) {
  let result = ' ';
  let charactersLength = this.characters.length;
  for (let i = 0; i < length; i++) {
    result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
   return result;
   

  }
  

}

