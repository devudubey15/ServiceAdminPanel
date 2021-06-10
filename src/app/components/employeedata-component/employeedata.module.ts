import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
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
  providers: [EmployeeService]

})
export class EmployeedataModule { }
