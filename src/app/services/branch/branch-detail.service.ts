import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BranchDetailService {

  constructor(
    private firestore : AngularFirestore
  ) { }

  getBranchDetail(id : string){
   // return this.firestore.collection('branch_detail').snapshotChanges();
      return this.firestore.collection('branch_detail').doc(id).valueChanges();
  }

  updateBranchDetail(id:string, payload:any){
    return this.firestore.doc('branch_detail/'+id).update(payload);
  }
  
}
