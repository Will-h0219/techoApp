import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracingRoutingModule } from './tracing-routing.module';
import { TracingComponent } from './pages/tracing/tracing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TracingComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TracingRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TracingModule { }
