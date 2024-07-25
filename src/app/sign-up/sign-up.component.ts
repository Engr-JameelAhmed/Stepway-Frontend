import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../shared/password-match.directive';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  SignUpForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+(?: [A-Za-z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {
    validators: passwordMatchValidator
  })
  constructor(
            private fb : FormBuilder,
            private authService: AuthService,
            private messageService: MessageService,
            private router: Router
          ){


  }

  // or we can directly give access to the control in a method
  get fullName(){
    return this.SignUpForm.controls['fullName'];
  }
  get email(){
    return this.SignUpForm.controls['email'];  //  instead of this big line we can simply use just email for the clean code
  }
  get password(){
    return this.SignUpForm.controls['password'];
  }
  get confirmPassword(){
    return this.SignUpForm.controls['confirmPassword'];
  }


  submitDetails(){
    const postData = { ...this.SignUpForm.value };
    delete postData.confirmPassword;

    this.authService.createUser(postData as User).subscribe(
      response => {
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register Successfully' });
        this.router.navigate(['login'])
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }

    )

  }
}
