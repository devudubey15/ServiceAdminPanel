import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BillingRoutingModule} from './billing.routing.module';
import { BillingComponent } from './billing/billing.component';


@NgModule({
  declarations: [
  BillingComponent
  ],
  imports: [
   CommonModule,
   BillingRoutingModule,
   FormsModule
  ],
  
})
export class BillingModule { }
