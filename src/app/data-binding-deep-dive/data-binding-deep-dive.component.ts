import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-deep-dive',
  templateUrl: './data-binding-deep-dive.component.html',
  styleUrls: ['./data-binding-deep-dive.component.css']
})
export class DataBindingDeepDiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  datas=[]

  name = "";
  status = "";
  data = [];

  onAddData( eventData:{name:string,status:string} ) {
    this.datas.push({
      name: eventData.name,
      status: eventData.status
    })
  }

}
