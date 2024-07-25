import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import lottie from 'lottie-web';
import { UserResponse } from '../Model/User';
import { UtilService } from '../services/util.service';


export interface loginData {
  email: string;
  password: string;
}
export interface JwtToken {
  accessToken: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    CuurentloggedRole: string;
    authService: AuthService = inject(AuthService);
    loginObject: any = {
      email: '',
      password: ''
    }
    LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
    constructor(
          private fb : FormBuilder,
          private router: Router,
          private utilService: UtilService
        ){
    }
    ngOnInit(){
      lottie.loadAnimation({
        container: document.getElementById("login-animations"),
        path: "assets/Animations/Warrior Pose.json",
        renderer: "svg",
        loop: true,
        autoplay: true,
        name: "adjingo-animation",
      });
    }

    // or we can directly give access to the control in a method
    get email(){
      return this.LoginForm.controls['email'];
    }
    get password(){
      return this.LoginForm.controls['password'];
    }

    //  implementing the jwt Authentication
    OnLogin(){
      this.loginObject.email = this.email.value;
      this.loginObject.password = this.password.value;
      let user: UserResponse = {
        email : this.loginObject.email,
        password : this.loginObject.password
      }
      this.authService.login(user).subscribe(
        (response: JwtToken) => {
          var token = response.accessToken;
          console.log(response);
          debugger
          localStorage.setItem('accessToken', token);
          if(token){
            var a = this.parseJwt(token);
            const roles = a.ROLES;
            this.CuurentloggedRole = roles[0];
            this.utilService.roleChanged.emit(this.CuurentloggedRole);

            if (roles[0] === "ADMIN") {
              this.router.navigateByUrl('/admin-dashboard');
            } else if (roles.includes("STUDENT")) {
              this.router.navigateByUrl('/student-dashboard');
            }else if(roles.includes("TEACHER")){
              this.router.navigateByUrl('/teacher-dashboard');
            }else{
              console.log('User Not Found');
            }
          }else{
            console.log("Token not dound");
          }
          console.log(token);
        },
        (error) => {
          console.error("Login failed. Please check your credentials.", error);
        }
      );
    }
    parseJwt (token) {
      var base64Url = token.split('.')[1];
      var base64 = decodeURIComponent(atob(base64Url).split('').map((c)=>{
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(base64);
  };


}
