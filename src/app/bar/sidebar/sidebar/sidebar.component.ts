import { Component, OnInit, ElementRef } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private elRef: ElementRef,
    private _router: Router
    ) { }

  ngOnInit(): void {
  }

  checkedItems(index: any) {
    var itemRef = this.elRef.nativeElement.querySelectorAll('.nav-item');
    for (var i = 0; i < itemRef.length; i++) {
      if (i == index) {
        itemRef[i].className = 'nav-item  w-100 px-3 py-1 checked-item';
      } else {
        itemRef[i].className = 'nav-item  w-100 px-3 py-1';
      }
    }
  }
  logout(){
    if(confirm("Are you sure. you want to logout?")){
      localStorage.removeItem('Auth_id');
      this._router.navigate(['/auth'])
  .then(() => {
    window.location.reload();
  });
    }
  }

}