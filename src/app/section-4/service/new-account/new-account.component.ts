import { Component, DoCheck, OnInit } from '@angular/core';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogService]
})
export class NewAccountComponent implements OnInit, DoCheck {

  data: { account: string, status: string }[];
  constructor(private logService: LogService) { }

  ngOnInit() {
    this.data = this.logService.data;
  }

  ngDoCheck() {
  }
  setStatus(status: string, id: number) {
    alert(status)
    this.logService.updateStatus(id, status);
  }

  get() {
    this.data = this.logService.getData()
  }

}