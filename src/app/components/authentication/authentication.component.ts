import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userId:any='d';
  password:any='1';
  authPage=false;
  

  authanticationCheck(username:any,pass:any){
    if(username.value==this.userId && pass.value == this.password){
      this.authPage = true;
     
    }
   else
   {
      alert("UserID or Password is incorrect");
   }
    
  }


}
