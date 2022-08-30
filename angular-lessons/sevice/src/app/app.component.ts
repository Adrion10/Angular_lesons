import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sevice';
  memberData = [
    { name: 'Lace', email: 'lace@gmail.com' },
    { name: 'Noel', email: 'Noel@gmail.com' },
    { name: 'Marisola', email: 'Marisola@gmail.com' },
    { name: 'Rove', email: 'Rove@gmail.com' },
  ];
}
