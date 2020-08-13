import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';
import { Authenticate } from './authenticate';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  authenticate(email: string, password: string) {

    return this.http
      .post(
        API + '/seguranca/login', 
        { email, password }, 
        { observe: 'response'} 
      )
      .pipe(tap(res => {
        const authToken = res.body as Authenticate;
        this.userService.setToken(authToken.token);
      }));
  }
}