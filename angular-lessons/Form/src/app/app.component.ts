import { Component } from '@angular/core';

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
  title1="Reactiv Form In Angular"
}
