import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import * as jtw_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;

    constructor(private tokenService: TokenService,
        private router: Router) {

        this.tokenService.hasToken() &&
            this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const user = this.decode();
        if (user)
            this.userName = user.sub;
            this.userSubject.next(user);
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    isValid() {
        const user = this.decode();
        if (user) {
            var dataAtual = new Date();
            var dataExpiracao = new Date(user.exp * 1000);
            if (dataAtual > dataExpiracao) {
                return false;
            }
            return true;
        }
        return false;

    }

    getUserName() {
        return this.userName;
    }

    decode() {
        try {
            const token = this.tokenService.getToken();
            const user = jtw_decode(token) as User;
            return user;
        } catch (err) {
            console.log('erro converter token');
            this.tokenService.removeToken();
            return null
        }
    }
}