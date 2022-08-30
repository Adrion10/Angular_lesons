import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor() {}
  users() {
    return [
      { name: 'Lace', age: 30, email: 'lace@gmail.com' },
      { name: 'Noel', age: 30, email: 'Noel@gmail.com' },
      { name: 'Mari', age: 30, email: 'Mari@gmail.com' },
    ];
  }
}
