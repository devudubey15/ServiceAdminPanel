import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AuthService } from './components/authentication/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './bar/sidebar/sidebar/sidebar.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { BranchDetailService } from './services/branch/branch-detail.service';
import { EmployeeService } from './services/employee/employee.service';
import { MembershipService } from './services/membership_service/membership.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AuthenticationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    AuthService,
    BranchDetailService,
    EmployeeService,
    MembershipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
