import { Injectable } from '@angular/core';
import { DataService } from './data_add.service';

@Injectable()
export class RoutingService {

    constructor(private dataService: DataService) { }

    serverAdd(name, status) {
        this.dataService.serverAdd(name, status);
    }

    userAdd(name, num) {
        this.dataService.userAdd(name, num);
    }
    getServerData() {
        return this.dataService.ServerData;
    }

    getUserData() {
        return this.dataService.UserData;
    }
}