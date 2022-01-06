import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MemberRoutingModule } from './member.routing.module';

import {MemberComponent} from './member/member.component'

@NgModule({
  declarations: [
  MemberComponent
  ],
  imports: [
   CommonModule,
   MemberRoutingModule
  ],
  
  
})
export class MemberModule { }
