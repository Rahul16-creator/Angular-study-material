import { Component, OnInit } from '@angular/core';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LogService]
})
export class AccountComponent implements OnInit {

  account: string;
  status: string;
 

  constructor(private logService: LogService) { }

  ngOnInit() {
  }

  AddData() {
    this.logService.addData(this.account,this.status)
  }




}
