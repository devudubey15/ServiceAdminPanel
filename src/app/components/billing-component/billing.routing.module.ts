import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BillingComponent} from './billing/billing.component'

const routes: Routes = [
   {path : '', redirectTo:'billing', pathMatch:'full'},
   {path: 'billing', component: BillingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
