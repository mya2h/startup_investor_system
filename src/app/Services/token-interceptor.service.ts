import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';
import {LoginService} from './login.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { 
    
  }
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>> 
  {
    let _auth = this.injector.get(LoginService);
    
    let tokenizedreq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${_auth.getToken()}`
      }
    });
    return next.handle(tokenizedreq);
  }
}
