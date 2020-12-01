import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    ServerData: { name: string, status: string }[] = [];
    UserData: { name: string, mobile_number: string }[] = [];

    serverAdd(name: string, status: string) {
        this.ServerData.push({ name: name, status: status });
    }

    userAdd(name: string, mobileNumber: string) {
        this.UserData.push({ name: name, mobile_number: mobileNumber })
    }
}