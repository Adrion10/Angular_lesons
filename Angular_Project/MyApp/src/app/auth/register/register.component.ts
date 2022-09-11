import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/Types/Autj';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: LoginForm = {
    email: '',
    password: '',
    confirm_password: '',
  };

  constructor() {}

  ngOnInit(): void {}
  submit() {
    console.log(this.form);
  }
}
