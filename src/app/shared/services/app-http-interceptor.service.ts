import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class AppHttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router ) { }

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
      console.log('AppHttpInterceptorService worked');
      return next.handle(req).pipe(
        
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if(error.status == 401){
            this.router.navigate(['login']);
          }
          
          if (error.error instanceof ErrorEvent) {
            console.log('intercept if ');
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            console.log('intercept else ');
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          //window.alert(errorMessage);
          return throwError(errorMessage);
        })

      );
  }
}



// intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
//   console.log('AppHttpInterceptorService worked');
//   return next.handle(req).pipe(map(resp => 
//     {
//       console.log('map block')
//       return resp;
    
//     }),
    
//     catchError(err => {
//       // if (err.status === 401) {
//       // }

//      // const error = err.error.message || err.statusText;
      
//       console.log('catchError block')
//       console.log(err)
//       return throwError('jj');
//      }),
    
//     );
// }
// }
