import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form with form controls and validations
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.loginForm.valid) {
      alert(`{ username: '${this.loginForm.value.username}', password: '${this.loginForm.value.password}' }`);
      this.router.navigate(['home']);
    } else {
      alert(`Form Invalid.`);
    }
  }
}
