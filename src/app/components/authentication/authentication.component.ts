import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
     this.authCheck();
  }

  authPage = false;
  

  authanticationCheck(username:any,pass:any){
       this._authService.authentication(pass.value).subscribe((result:any) =>{
          //console.log(result[0].payload.doc.id);
          if( result.length <=0){
            alert("UserID or Password is incorrect");
          }else{
            localStorage.setItem('Auth_id', result[0].payload.doc.id);
            this.authPage = true;
          }
       })
  }

  authCheck(){
    let id = null;
    id = localStorage.getItem('Auth_id');
    if( id == null ){
      this.authPage = false;
    }else{
      this._router.navigate(['/member']);
      this.authPage = true;
    }
  }



}
