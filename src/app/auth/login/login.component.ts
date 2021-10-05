import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginClass } from '../authModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  loginModel = new LoginClass();

  fieldTextType: boolean = false;
  submitted = false;
  showLoginForm: boolean = true;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginMail: new FormControl('', [Validators.required, Validators.email]),
      loginPassword: new FormControl('', [Validators.required]),
    });
  }

  get f() { return this.loginForm.controls; }

  // == Save ==
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  }

  // == Toggle Password ==
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
