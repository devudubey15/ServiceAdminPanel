import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  getMember(membership_id: string){
    return this.firestore.collection('membership_details', ref => ref.where('membership_detail.membership_id','==',membership_id)).valueChanges();
     
  }
}
