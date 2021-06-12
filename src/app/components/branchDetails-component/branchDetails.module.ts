import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { BranchDetailsRoutingModule } from './branchDetails.routing.module';

@NgModule({
    declarations: [
        
    
    BranchDetailsComponent
  ],
    imports: [
        CommonModule,
        BranchDetailsRoutingModule,
        FormsModule
    ],
    

})
export class BranchDetailsModule { }
