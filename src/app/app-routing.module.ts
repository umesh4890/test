import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';

const routes: Routes = [

  {
    path: '', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'login', 
        loadChildren: './applications/users/users.module#UsersModule',
        data: { title: 'login'} 
      }
    ]
  },
  {
    path: '', 
    component: AdminLayoutComponent,
    children: [
      { 
        path: 'dashboard', 
        loadChildren: './applications/dashboard/dashboard.module#DashboardModule', 
        data: { title: 'Dashboard', breadcrumb: 'DASHBOARD'}
      },
      { 
        path: 'forms', 
        loadChildren: './applications/shayona-forms/shayona-forms.module#ShayonaFormsModule', 
        data: { title: 'Dashboard', breadcrumb: 'DASHBOARD'}
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
