import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  showPage: any;
  name: any;
  password: any;
  newName: any;
  newPassword: any;
  signupForm: any;
  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }

  login() {
    const userName = localStorage.getItem('name');
    const userPass = localStorage.getItem('pass');
    if (this.name === userName && this.password === userPass) {
      this.router.navigate(['/graph']);
    } else {
      alert('Wrong credentials');
    }
    this.name = '';
    this.password = '';
  }
  signUp() {
    if (this.newName && this.newPassword) {
      localStorage.setItem('name', this.newName);
      localStorage.setItem('pass', this.newPassword);
      this.signupForm = false;
      this.newName = '';
      this.newPassword = '';
      this.name = '';
      this.password = '';
    } else {
      alert('Enter all details');
      this.newName = '';
      this.newPassword = '';
      this.name = '';
      this.password = '';
    }
  }
  showSignup() {
    this.signupForm = true;
  }
}
