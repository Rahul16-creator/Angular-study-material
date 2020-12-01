import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

    data: { account: string, status: string }[] = [
        { account: "rahul", status: "online" }
    ];

    getData() {
        return this.data;
    }

    addData(account: string, status: string) {
        this.data.push({ account: account, status: status });
        console.log(this.data);
    }

    updateStatus(id: number, status: string) {
        this.data[id].status = status;
    }
    
}