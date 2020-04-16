import { Routes, RouterModule } from '@angular/router';
import { FormCreateComponent} from './form-create/form-create.component'
import { FormListComponent } from './form-list/form-list.component'
import { FormEditComponent } from './form-edit/form-edit.component'
import { FormfieldCreateComponent } from './formfield-create/formfield-create.component'
import { FormfieldEditComponent } from './formfield-edit/formfield-edit.component'
import { FormfieldValueComponent } from './formfield-value/formfield-value.component'
import { FormnotificationCreateComponent } from './formnotification-create/formnotification-create.component'
import { FormnotificationEditComponent } from './formnotification-edit/formnotification-edit.component'





export const ShayonaFormsRoutingModule: Routes = [
  { path: 'formcreate', component: FormCreateComponent, data: { title: 'forms' } },
  { path: 'formlist', component: FormListComponent, data: { title: 'forms' } },
  { path: 'formedit/:id', component: FormEditComponent, data: { title: 'forms' } },
  { path: 'formfieldcreate/:id', component: FormfieldCreateComponent, data: { title: 'forms' } },
  { path: 'formfieldedit/:id/:id', component: FormfieldEditComponent, data: { title: 'forms' } },
  { path: 'formfield/valueedit/:formId/:formFieldId', component: FormfieldValueComponent, data: { title: 'forms' } },
  { path: 'formnotificationcreate/:formId', component: FormnotificationCreateComponent, data: { title: 'forms' } },
  { path: 'formnotificationedit/:formId/:formNotificationId', component: FormnotificationEditComponent, data: { title: 'forms' } }


];

