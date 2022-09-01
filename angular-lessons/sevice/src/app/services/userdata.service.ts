import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  url = 'http://localhost:8080/userdata';
  constructor(private http: HttpClient) {}
  users() {
    // return [
    //   { name: 'Lace', age: 30, email: 'lace@gmail.com' },
    //   { name: 'Noel', age: 30, email: 'Noel@gmail.com' },
    //   { name: 'Mari', age: 30, email: 'Mari@gmail.com' },
    // ];
    return this.http.get(this.url);
  }
}
