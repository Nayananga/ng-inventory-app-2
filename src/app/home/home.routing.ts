import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';

const routes: Routes =[
  { path: '', redirectTo: 'dashboard', pathMatch: 'full',}, 
  { path: '', component: AdminLayoutComponent, loadChildren: '../layouts/admin-layout/admin-layout.module#AdminLayoutModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
})

export class HomeRoutingModule { }
