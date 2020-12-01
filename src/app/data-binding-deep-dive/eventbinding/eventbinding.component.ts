import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  @ViewChild('names') statusnames:ElementRef

  @Output() data = new EventEmitter<{ name: string, status: string }>()
  ngOnInit(): void {
  }

 
  status;

  onAddData() {
    this.data.emit({ name: this.statusnames.nativeElement.value, status: this.status })
  }

}