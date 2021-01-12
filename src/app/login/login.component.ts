import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = true;
  register = false;
  userLogin: login = new login();
  constructor(  
    private router : Router,
  ) { }

  ngOnInit() {
  }

  goToLogin(){
    this.register = false;
    this.login = true;
  }

  goToRegister(){
    this.login = false;
    this.register = true;
  }
  erasingRegisterFields(){
  
  }

  erasingLoginFields(){
   
  }

  registerUser(){
  
  }

  loginUser(){
   console.log(this.userLogin)
   if(this.userLogin.userName =="admin"&& this.userLogin.password=="123"){
     this.router.navigate(['layout']);
   }

}

}
