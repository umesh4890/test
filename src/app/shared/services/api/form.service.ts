import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  formCreateURL = '/api/backend/form-infomation/create';
  formListURL = '/api//backend/form-infomation/list';
  formEditURL = '/api/backend/form-infomation/edit';
  formUpdateURL = '/api/backend/form-infomation/update';
  formDeleteURL = '/api/backend/form-infomation/delete';

  formFieldCreateURL = '/api/backend/form-field/create';
  formFieldListURL = '/api//backend/form-field/list';
  formFieldEditURL = '/api/backend/form-field/edit';
  formFieldUpdateURL = '/api/backend/form-field/update';
  formFieldDeleteURL = '/api/backend/form-field/delete';

  formFieldValueCreateURL = `/api/backend/form-field/value-create`;
  formFieldValueListURL = `/api/backend/form-field/value-list`;
  formFieldValueUpdateURL = `/api/backend/form-field/value-update`;

  formNotificationCreateURL = '/api/backend/form-notification/create';
  formNotificationListURL = '/api//backend/form-notification/list';
  formNotificationEditURL = '/api/backend/form-notification/edit';
  formNotificationUpdateURL = '/api/backend/form-notification/update';
  formNotificationDeleteURL = '/api/backend/form-notification/delete';

  testURL = '/api/dashboard/testapicall';

  constructor(private http: HttpClient) { }

  //form infomation--------------------------
  
  formNameCreate(user: any): Observable<any> {
    const url = `${this.formCreateURL}`;
    return this.http.post<any>(url, user)
      .pipe(
        tap(data =>{ console.log('Form Name Added Successfully');}),
     
        catchError(this.handleError<any>('Form Name Added', { "status": false, "message": "Form Name Added Error" }))
      );
  }

  formNameList(): Observable<any> {
    const url = `${this.formListURL}`;
    return this.http.get<any>(url)
      .pipe(
        tap(data =>{ console.log('Form Name list Display Successfully');}),
     
        catchError(this.handleError<any>('Form Name Data', { "status": false, "message": "Form Name Added Error" }))
      );
  }

  formNameEdit(editId: any): Observable<any> {
    const url = `${this.formEditURL}`;
    const data =  { 
                    id : editId 
                  };
    return this.http.post<any>(url, data)
      .pipe(
        tap(data =>{ console.log('Form Name Get Id Data Successfully');}),
     
        catchError(this.handleError<any>('Form Name Added', { "status": false, "message": "Form Name Added Error" }))
      );
  }

  formNameUpdate(user: any): Observable<any> {
    const url = `${this.formUpdateURL}`;
    return this.http.post<any>(url, user)
      .pipe(
        tap(data =>{ console.log('Form Name Update Successfully');}),
     
        catchError(this.handleError<any>('Form Name Update', { "status": false, "message": "Form Name Update Error" }))
      );
  }

  formNameDelete(id: any): Observable<any> {
    const url = `${this.formDeleteURL}`;
    const data =  { 
                    id : id 
                  };
    return this.http.post<any>(url, data)
      .pipe(
        tap(data =>{ console.log('Form Name Get Id Data Successfully');}),
     
        catchError(this.handleError<any>('Form Name Added', { "status": false, "message": "Form Name Added Error" }))
      );
  }

   // form field-------------------------------

   formFieldCreate(user: any): Observable<any> {
    const url = `${this.formFieldCreateURL}`;
    return this.http.post<any>(url, user)
      .pipe(
        tap(data =>{ console.log('Form Fields Added Successfully');}),
     
        catchError(this.handleError<any>('Form Fields Added', { "status": false, "message": "Form Fields Added Error" }))
      );
  }

  formFieldList(listId: any): Observable<any> {
    const url = `${this.formFieldListURL}`;
    const data =  { 
              id : listId 
            };
    return this.http.post<any>(url, data)
      .pipe(
        tap(data =>{ console.log('Form Fields list Display Successfully');}),
     
        catchError(this.handleError<any>('Form Fields Data', { "status": false, "message": "Form Fields Added Error" }))
      );
  }

  formFieldEdit(formFieldEditId: any): Observable<any> {
    const url = `${this.formFieldEditURL}`;
    const data =  { 
                    id : formFieldEditId 
                  };
    return this.http.post<any>(url, data)
      .pipe(
        tap(data =>{ console.log('Form Field Get Id Data Successfully');}),
     
        catchError(this.handleError<any>('Form Field Get Id Data', { "status": false, "message": "Form Name Added Error" }))
      );
  }

  formFieldsUpdate(user: any): Observable<any> {
    const url = `${this.formFieldUpdateURL}`;
    return this.http.post<any>(url, user)
      .pipe(
        tap(data =>{ console.log('Form Field Update Successfully');}),
     
        catchError(this.handleError<any>('Form Field Update', { "status": false, "message": "Form Field Update Error" }))
      );
  }

  fieldsValueCreate(newvalue: any): Observable<any> {
    const url = `${this.formFieldValueCreateURL}`;
    //console.log(newvalue);
    return this.http.post<any>(url, newvalue)
      .pipe(
        tap(data =>{ console.log('Field Create Value Successfully');}),
     
        catchError(this.handleError<any>('Field Create Value', { "status": false, "message": "Field Create Value Error" }))
      );
  }

  fieldValueList(formFieldId: any): Observable<any> {
    const url = `${this.formFieldValueListURL}`;
    const data =  { 
          form_field_id : formFieldId 
            };
    return this.http.post<any>(url, data)
      .pipe(
        tap(data =>{ console.log('Form Fields list Display Successfully');}),
     
        catchError(this.handleError<any>('Form Fields Data', { "status": false, "message": "Form Fields Added Error" }))
      );
  }

  fieldsValueUpdate(newvalue: any): Observable<any> {
    const url = `${this.formFieldValueUpdateURL}`;
    //console.log(newvalue);
    return this.http.post<any>(url, newvalue)
      .pipe(
        tap(data =>{ console.log('Field Update Value Successfully');}),
     
        catchError(this.handleError<any>('Field Update Value', { "status": false, "message": "Field Update Value Error" }))
      );
  }

  formFieldDelete(id: any): Observable<any> {
    const url = `${this.formFieldDeleteURL}`;
    const data =  { 
                    id : id
                  };
    return this.http.post<any>(url, data)
      .pipe(
        tap(data =>{ console.log('Form Field Get Id Data Successfully');}),
     
        catchError(this.handleError<any>('Form Field Get Id Data', { "status": false, "message": "Form Name Added Error" }))
      );
  }


  // form notification --------------------------------
  
  formNotificationCreate(newvalue: any): Observable<any> {
    const url = `${this.formNotificationCreateURL}`;
    //console.log(newvalue);
    return this.http.post<any>(url, newvalue)
      .pipe(
        tap(data =>{ console.log('Form Notification Create Successfully');}),
     
        catchError(this.handleError<any>('Form Notification Create', { "status": false, "message": "Form Notification Create Error" }))
      );
  }

  formNotificationList(listId: any): Observable<any> {
    const url = `${this.formNotificationListURL}`;
    const data =  { 
              id : listId 
            };
    return this.http.post<any>(url, data)
      .pipe(
        tap(data =>{ console.log('Form Notification list Display Successfully');}),
     
        catchError(this.handleError<any>('Form Notification Data', { "status": false, "message": "Form Notification Added Error" }))
      );
  }

  formNotificationEdit(formNotifiEditId: any): Observable<any> {
    const url = `${this.formNotificationEditURL}`;
    const data =  { 
                    id : formNotifiEditId 
                  };
    return this.http.post<any>(url, data)
      .pipe(
        tap(data =>{ console.log('Form Field Get Id Data Successfully');}),
     
        catchError(this.handleError<any>('Form Field Get Id Data', { "status": false, "message": "Form Name Added Error" }))
      );
  }

  formNotificationUpdate(user: any): Observable<any> {
    const url = `${this.formNotificationUpdateURL}`;
    return this.http.post<any>(url, user)
      .pipe(
        tap(data =>{ console.log('Form Field Update Successfully');}),
     
        catchError(this.handleError<any>('Form Field Update', { "status": false, "message": "Form Field Update Error" }))
      );
  }

  formNotificationDelete(id: any): Observable<any> {
    const url = `${this.formNotificationDeleteURL}`;
    const data =  { 
                    id : id
                  };
    return this.http.post<any>(url, data)
      .pipe(
        tap(data =>{ console.log('Form Field Get Id Data Successfully');}),
     
        catchError(this.handleError<any>('Form Field Get Id Data', { "status": false, "message": "Form Name Added Error" }))
      );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //return of(result as T);
    return of(result as T);
    };
    
  }

}
