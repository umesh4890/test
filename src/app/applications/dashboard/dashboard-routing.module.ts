import { Routes, } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

export const DashboardRoutingModule: Routes = [
  { path: '', component: MainDashboardComponent, data: { title: 'Dashboard' } }
];


