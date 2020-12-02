import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.component.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService) { }

  @ViewChild('f') form: NgForm;

  userData = [];
  loading: boolean = false;
  isError: boolean = false;
  error = null;
  private sub: Subscription;
  ngOnInit(): void {
    this.isError = false;

    this.sub = this.httpService.errroMessage.subscribe(res => {
      this.isError = true;
      this.error = res;
    })

  }

  onSubmit() {
    this.httpService.AddData({
      username: this.form.value.username,
      password: this.form.value.password
    })
    this.form.reset();
  }

  onGetData() {
    this.loading = true;
    this.httpService.GetData().pipe(map(data => {
      const array = [];
      for (let key in data) {
        array.push({ ...data[key], id: key })
      }
      return array;
    })).subscribe(data => {
      this.userData = data;
      console.log(this.userData)
      this.loading = false;
    }, (error) => {
      this.isError = true;
      this.error = error.message.split(":")[2];
      this.loading = false;
    })

  }

  onClearData() {
    this.loading = true;
    this.httpService.DeleteData().subscribe(res => {
      this.userData = [];
      this.error = null;
      this.loading = false;
    }, (error) => {
      this.isError = true;
      this.error = error
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}