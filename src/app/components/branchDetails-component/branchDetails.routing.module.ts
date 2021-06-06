import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchDetailsComponent } from './branch-details/branch-details.component';


const routes: Routes = [
    { path: '', redirectTo: 'branch', pathMatch: 'full' },
    { path: 'branch', component:BranchDetailsComponent  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BranchDetailsRoutingModule { }
