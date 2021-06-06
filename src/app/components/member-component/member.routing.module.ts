import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemberComponent} from './member/member.component';

const routes: Routes = [
   {path : '', redirectTo:'member', pathMatch:'full'},
   {path: 'member', component:MemberComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
