import { Component, OnInit } from '@angular/core';
import { MembershipService } from '../../../services/membership_service/membership.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(
    private memberService: MembershipService
  ) { }

  ngOnInit(): void {
  }

  searchBar = true;
  membershipData :any = {};
  
  searchMember(event:any){
   
     this.memberService.getMember(event.value).subscribe((result) =>{
       if(result.length <=0){
         alert("Result not Found");
       }else{
        console.log(result)
         this.membershipData  = result[0];
         this.searchBar = false;
       }
    
    })
  
  }
  back(){
    this.searchBar = true;
  }

}
