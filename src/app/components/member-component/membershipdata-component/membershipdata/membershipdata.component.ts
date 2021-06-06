import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membershipdata',
  templateUrl: './membershipdata.component.html',
  styleUrls: ['./membershipdata.component.css']
})
export class MembershipdataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allMembershipData = {
    pesonalDetailOfMember:{
      name:'Daya Ram Rajpoot',address:'vill & post Bhadsan, ajeetmal, auraiya, UP 206120',number:'9856452598',
      email:'drraj112@gmail.com'
    },
    vehicleDetail:{
      modelName: 'rajdoot 275', rcNumber: 'lyiktyuregtre', chechisNumber: 'XR10234STY324POI6', vehicleNumber:'UP 78 D 0343'
    },
    membershipDetail:{
      membershipId:'uiyjtgfd8956',membershipStartDate:'22/05/2019',membershipEndDate:'22/05/2023'
    }

  }

}
