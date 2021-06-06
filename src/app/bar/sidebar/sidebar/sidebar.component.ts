import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

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

}