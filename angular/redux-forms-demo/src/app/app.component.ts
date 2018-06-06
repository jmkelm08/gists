import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @select(['myForm']) form$: Observable<any>;

  someForm: FormGroup;

  constructor () {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.someForm = new FormGroup({
      address: new FormControl('', Validators.required)
    });
  }
}
