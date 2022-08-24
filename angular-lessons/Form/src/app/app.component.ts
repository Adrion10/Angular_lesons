import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    user: new FormControl(''),
    password: new FormControl(''),
  });
  loginUser1() {
    console.log(this.loginForm1.value);
  }
}
