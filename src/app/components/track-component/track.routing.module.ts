import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
    { path: '', redirectTo: 'Track', pathMatch: 'full' },
    { path: 'Track', component: TrackComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrackRoutingModule { }
