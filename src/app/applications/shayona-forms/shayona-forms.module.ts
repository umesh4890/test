import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShayonaFormsRoutingModule } from './shayona-forms-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import {MatSelectModule,
   MatSidenavModule,
   MatToolbarModule,
   MatIconModule,
   MatMenuModule,
   MatButtonModule,
   MatInputModule,
   MatTableModule,
   MatCheckboxModule,
   MatFormFieldModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatSlideToggleModule,
   MatRadioModule,
   MatListModule,
   MatCardModule,
   MatDividerModule } from '@angular/material';

import { FormCreateComponent } from '../shayona-forms/form-create/form-create.component';
import { FormListComponent, FormDialogDelete } from './form-list/form-list.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormfieldCreateComponent, FormFieldDialogDelete } from './formfield-create/formfield-create.component';
import { FormfieldEditComponent } from './formfield-edit/formfield-edit.component';
import { FormfieldValueComponent, FormFieldValueDialog } from './formfield-value/formfield-value.component';
import { FormnotificationCreateComponent, FormNotificationDialogDelete } from './formnotification-create/formnotification-create.component';
import { FormnotificationEditComponent } from './formnotification-edit/formnotification-edit.component';


@NgModule({
  declarations: [
    FormCreateComponent,
    FormListComponent,
    FormDialogDelete,
    FormEditComponent,
    FormfieldCreateComponent,
    FormFieldDialogDelete,
    FormfieldEditComponent,
    FormfieldValueComponent,
    FormFieldValueDialog,
    FormnotificationCreateComponent,
    FormNotificationDialogDelete,
    FormnotificationEditComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ShayonaFormsRoutingModule),
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    HttpClientModule,
    MatCardModule,
    MatSnackBarModule
  ],
  entryComponents : [FormDialogDelete, FormFieldDialogDelete, FormFieldValueDialog, FormNotificationDialogDelete],
})
export class ShayonaFormsModule { }
