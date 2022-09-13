import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/Types/Autj';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
  };

  passwordMatched: boolean = true;

  isLoading: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  submit() {
    if (this.isLoading) return;

    this.isLoading = true;

    if (this.form.password !== this.form.password) {
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => (this.isLoading = false));
  }
}
