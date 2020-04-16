import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { 
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatDialogModule
} from '@angular/material';

//Components
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { HeaderSideNavComponent } from './components/header-side-nav/header-side-nav.component';

//Services
import { LayoutService } from './services/layout.service';
import { UserService } from './services/api/user.service';
import { AppHttpInterceptorService } from './services/app-http-interceptor.service'



@NgModule({
  declarations: [AdminLayoutComponent, HeaderTopComponent, HeaderSideNavComponent, AuthLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatDialogModule,
    HttpClientModule,
  ],
  exports: [AdminLayoutComponent,AuthLayoutComponent,HeaderTopComponent,HeaderSideNavComponent],
  providers: [
    LayoutService,
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptorService, multi: true}
  ],

})
export class SharedModule { }
