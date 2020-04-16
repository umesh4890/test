import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { 
  MatProgressBarModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule
 } from '@angular/material';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forChild(UsersRoutingModule)
  ]
})
export class UsersModule { }
