import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  authentication(password: string){
    return this.firestore.collection('branch_detail', ref => ref.where('password','==',password)).snapshotChanges();
  }
}
