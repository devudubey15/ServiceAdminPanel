import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MembershipdataRoutingModule } from './membershipdata.routing.module';
import { MembershipdataComponent } from './membershipdata/membershipdata.component';


@NgModule({
  declarations: [
    MembershipdataComponent
  ],
  imports: [
   CommonModule,
    MembershipdataRoutingModule
  ],
  
})
export class MembershipdataModule { }
