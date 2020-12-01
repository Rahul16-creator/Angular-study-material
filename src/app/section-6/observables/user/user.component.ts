import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id:number;
  constructor(private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.params.subscribe((res)=>{
      this.id=res['id'];
    })
  }

}
