import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
}) 

export class HttpService {

    errroMessage=new Subject<string>();

    constructor(private httpClient: HttpClient) { }

    AddData(data: { username: string, password: string }) {
        this.httpClient.post('https://angular-basics-20ead.firebaseio.com/check.json', data).subscribe(res => {
            console.log(res);
        },error=>{
            this.errroMessage.next(error.message.split(":")[2]);
        })
    }

    GetData(){
        return this.httpClient.get('https://angular-basics-20ead.firebaseio.com/check.json',{
            params:new HttpParams().set("h","hello")
        });
    }

    DeleteData(){
        return this.httpClient.delete('https://angular-basics-20ead.firebaseio.com/check.json');
    }
}