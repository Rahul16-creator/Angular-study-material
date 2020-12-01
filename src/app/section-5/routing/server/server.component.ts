import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../routing.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverName: string;
  status: string
  constructor(private routingService: RoutingService) { }

  ngOnInit(): void {
  }

  onAddServerStatus() {
    this.routingService.serverAdd(this.serverName, this.status);
    this.serverName = "";
    this.status = "";
  }

}
