import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee/employee.service';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.getEmployees()
    console.log(this.employeeData)
  }
   employeeList: any = [{}];
   employeeId:any = []
   employeeIndex  = 0;
   attendanceList:any =[]
  
   today_date = new Date()

  ///get employees
  getEmployees(){
      this.employeeService.getEmployees().subscribe((result) =>{
        this.employeeId = [];
        this.employeeList  = result.map(e =>{
          this.employeeId.push(e.payload.doc.id);
          return e.payload.doc.data();
        });  
      }) 
  }
  // add employees 
  addEmployee(payload:any){
    this.employeeService.addEmployee(payload);
  }
  // delete employee
  deleteEmployee(id:string){
    if(confirm("Are you sure")){
           this.employeeService.deleteEmployee(id);
    }else{
      alert(" Employee not deleted")
    }
  }
 ///update details
 updateEmployee(id : string, payload :any){
   this.employeeService.updateEmployee(id,payload);
 }

  /// attendance
  attendance(event:any){
       this.attendanceList = this.employeeData.attendance_detail;
       var attendance  = {date:this.today_date.getDate(),attendance_status:event.value};
      this.attendanceList.push(attendance);
      this.employeeData.attendance_detail = this.attendanceList
      this.updateEmployee(this.employeeId[this.employeeIndex], this.employeeData)
      
  }

  employeeBtn = false;
  employeeDetailBtn=true;
  employeeEditBtn = true;
  employeeAddBtn=true;
  attendence =null;
  newEmployeeId:any=null;
  date:any=null;
  attendence_status:any=null;
  

  employeeData = {
    id: '', 
    name: '', 
    email: '', 
    mobile: '', 
    address: '', 
    wage: '', 
    position: '',
    bank_detail:{ 
      bank_name:'',
      account:'',
      ifsc_code:''
    },
    attendance_detail:[
        {
         date:'',
         attendance_status:''
        }
    ], 
  };
  addEmployeeData = {
    id: '', 
    name: '', 
    email: '', 
    mobile: '', 
    address: '', 
    wage: '', 
    position: '',
    bank_detail:{ 
      bank_name:'',
      account:'',
      ifsc_code:''
    },
    attendance_detail:[
       
    ], 
  };


  addNewEmployee(){

    this.employeeBtn = true;
    this.employeeDetailBtn = true;
    this.employeeEditBtn = true;
    this.employeeAddBtn = false;
    this.newEmployeeId = this.generateString(10);
  }
  saveNewEmployee(){
    this.addEmployeeData.id = this.newEmployeeId;
    this.addEmployee(this.addEmployeeData);
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
  perticularEmployeedetails(data:any, index:number) {
    this.employeeBtn = true;
    this.employeeEditBtn = true;
    this.employeeDetailBtn = false;
    this.employeeData = data;
    this.employeeIndex  = index;
  }
  perticularEmployeedetailsEdit(){
    this.employeeEditBtn = false;
    this.employeeDetailBtn = true;
    this.employeeBtn = true;
   
  }
  saveEditedDetails()
    {
     this.updateEmployee(this.employeeId[this.employeeIndex], this.employeeData)
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

