import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaymentRoutingModule } from './payment.routing.module';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
    declarations: [
    PaymentComponent
  ],
    imports: [
        CommonModule,
        PaymentRoutingModule,
        FormsModule
    ],

})
export class PaymentModule { }
