import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
  }

  searchBar = true;
  membershipData :any = {};
  
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
  searchMember(event:any){
   
     this.memberService.getMember(event.value).subscribe((result) =>{
       if(result.length <=0){
         alert("Result not Found");
       }else{
         this.membershipData  = result[0];
         this.searchBar = false;
       }
      //  console.log(this.membershipData)
    })
  
  }
  back(){
    this.searchBar = true;
  }

}
