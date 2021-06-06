import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeedataRoutingModule } from './employeedata.routing.module';
import { EmployeedataComponent } from './employeedata/employeedata.component';


@NgModule({
    declarations: [
        

    
    EmployeedataComponent
  ],
    imports: [
        CommonModule,
        EmployeedataRoutingModule,
        FormsModule
    ],

})
export class EmployeedataModule { }
