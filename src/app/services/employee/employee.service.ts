import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private firestore: AngularFirestore
  ) { }

///get API CALL
getEmployees(){
  return this.firestore.collection("employee_detail").snapshotChanges();
}

addEmployee(payload:any){
  this.firestore.collection("employee_detail").add(payload);
}

deleteEmployee(id:string){
  this.firestore.doc("employee_detail/"+id).delete();
}

updateEmployee(id:string, payload:any){
  this.firestore.doc("employee_detail/"+id).update(payload);
}
}
