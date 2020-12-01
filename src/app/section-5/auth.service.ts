import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    loggedIn: boolean = false;

    toAuth() {
        const promise = new Promise((res, req) => {
            setTimeout(() => {
                res(this.loggedIn)
            }, 2000)
        })
        return promise;
    }

    logIn() {
        this.loggedIn = true;
    }
    logOut() {
        this.loggedIn = false;
    }
}