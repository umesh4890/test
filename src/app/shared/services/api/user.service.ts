import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginURL = '/api/login';
  authCheckURL = '/api/user/authcheck';
  userDataURL = '/api/user';
  userLogoutURL = '/api/logout';

  testURL = '/api/dashboard/testapicall';

  constructor(private http: HttpClient) { }

  testApicall():Observable<any>{
    
    const url = `${this.testURL}`;
  
    return this.http.get<any>(url)
      .pipe(
        tap(data =>{ console.log('Test Data Services call'); }),
        catchError(this.handleError<any>('Test Data', { "status": false, "message": "Test Data Services call'" }))
      );
  }

  
  userAuthCheck():Observable<any>{
    const authCheckURL = `${this.authCheckURL}`;
    return this.http.get<any>(authCheckURL)
    .pipe(
      tap(data => { console.log('data'); }),
      catchError(this.handleError<any>('userAuthCheck', { "status": false, "message": "userAuthCheck Error" }))
    );
  }

  userLogin(user: any): Observable<any> {
    
    // const options = encodeURIComponent(JSON.stringify(param));
    const url = `${this.loginURL}`;

    // const options = {params: {params:param}};
    return this.http.post<any>(url, user)
      .pipe(
        tap(data =>{ console.log('Login Successfully'); }),
        catchError(this.handleError<any>('Login', { "status": false, "message": "Login Error" }))
      );
  }

  userData():Observable<any>{
    
    const url = `${this.userDataURL}`;
  
    return this.http.get<any>(url)
      .pipe(
        tap(data =>{ console.log('Login Successfully'); }),
        catchError(this.handleError<any>('Login', { "status": false, "message": "Error Getting User Data" }))
      );
  }

  userLogout():Observable<any>{
    const url = `${this.userLogoutURL}`;

    return this.http.get<any>(url)
      .pipe(
        tap(data =>{ console.log('Logout Successfully'); }),
        catchError(this.handleError<any>('Logout', { "status": false, "message": "Error Getting Logout" }))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //return of(result as T);
    return of(result as T);
    };
    
  }

}
