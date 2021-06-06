import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedataComponent } from './employeedata/employeedata.component';


const routes: Routes = [
    { path: '', redirectTo: 'employeedata', pathMatch: 'full' },
    { path: 'employeedata', component: EmployeedataComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeedataRoutingModule { }
