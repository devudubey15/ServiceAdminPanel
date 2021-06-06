import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembershipdataComponent } from './membershipdata/membershipdata.component';


const routes: Routes = [
   {path : '', redirectTo:'membershipdata', pathMatch:'full'},
  { path: 'membershipdata', component:MembershipdataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipdataRoutingModule { }
