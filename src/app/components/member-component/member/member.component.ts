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
