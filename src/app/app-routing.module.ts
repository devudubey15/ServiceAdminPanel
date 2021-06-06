import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthenticationComponent
  },
  {
    path: 'member',
    loadChildren: () => import('./components/member-component/member.module').then(m => m.MemberModule)
  },
  {
    path: 'billing',
    loadChildren: () => import('./components/billing-component/billing.module').then(m => m.BillingModule)
  },
  {
    path: 'membershipdata',
    loadChildren: () => import('./components/member-component/membershipdata-component/membershipdata.module').then(m => m.MembershipdataModule)
  },
  {
    path: 'employeedata',
    loadChildren: () => import('./components/employeedata-component/employeedata.module').then(m => m.EmployeedataModule)
  },
  {
  path: 'payment',
   loadChildren: () => import('./components/payment-component/payment.module').then(m => m.PaymentModule)
  },
  {
    path: 'track',
    loadChildren: () => import('./components/track-component/track.module').then(m => m.TrackModule)
  },
  {
    path: 'branch',
    loadChildren: () => import('./components/branchDetails-component/branchDetails.module').then(m => m.BranchDetailsModule)
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
