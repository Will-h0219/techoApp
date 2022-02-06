import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TracingComponent } from './pages/tracing/tracing.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'tracing', component: TracingComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracingRoutingModule { }
