import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../../routing.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  UserName: string;
  mobile_number: string;
  constructor(private routingService: RoutingService, private router: Router) { }

  ngOnInit(): void {
  }
  onAddUserData() {
    this.routingService.userAdd(this.UserName, this.mobile_number);
    this.UserName = "";
    this.mobile_number = "";
    this.router.navigate(['/']);
  }
}