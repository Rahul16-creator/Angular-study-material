import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../../routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  server;
  user;
  constructor(private routingService: RoutingService, private router: Router) { }

  ngOnInit(): void {
    this.server = this.routingService.getServerData();
    this.user = this.routingService.getUserData();
  }


  go(name, number) {
    this.router.navigate(['/user', number, name]);
  }
}