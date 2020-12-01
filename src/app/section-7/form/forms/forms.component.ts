import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }
  default="Your first pet?";

  @ViewChild('f') form: NgForm
  ngOnInit(): void {
  }
  // onSubmit(form: NgForm) {
  //   console.log(form.value.name);
  //   console.log(form.value.email);
  //   console.log(form.value.secret);
  //   console.log(form)
  // }

  onSubmit() {
    console.log(this.form.value.name);
  }

}
