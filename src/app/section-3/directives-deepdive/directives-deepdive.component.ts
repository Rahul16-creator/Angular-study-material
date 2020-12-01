import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-deepdive',
  templateUrl: './directives-deepdive.component.html',
  styleUrls: ['./directives-deepdive.component.css']
})
export class DirectivesDeepdiveComponent implements OnInit {

  onlyodd = true;
  odd = [1, 3, 5];
  even = [2, 4];
  value: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}