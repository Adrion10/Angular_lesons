import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Template driven Form';
  loginUser(item: any) {
    console.log(item);
  }
  title1 = 'Reactiv Form In Angular';
  loginForm1 = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  loginUser1() {
    console.log(this.loginForm1.value);
  }
  get user() {
    return this.loginForm1.get('user');
  }
  get password() {
    return this.loginForm1.get('password');
  }
  title2 = 'Directives';
}
