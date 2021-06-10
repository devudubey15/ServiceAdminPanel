import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BranchDetailsService } from 'src/app/services/branch-details.service';
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
    providers: [BranchDetailsService]

})
export class BranchDetailsModule { }
