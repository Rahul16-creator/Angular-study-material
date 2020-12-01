import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  name: string = "";
  server = [
    {
      name: "easy_server",
      connect: "easy",
      color: "green",
      status: "online",
      date: new Date()
    },
    {
      name: "medium_server",
      connect: "medium",
      color: "yellow",
      status: "offline",
      date: new Date()

    }, {
      name: "Hard_server",
      connect: "Hard",
      color: "red",
      status: "online",
      date: new Date()

    }, {
      name: "unstable_server",
      connect: "unstable",
      color: "transparent",
      status: "offline",
      date: new Date()

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
