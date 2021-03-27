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
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor(  
    private router : Router,
  ) { 
    this.lottieConfig = {
      path: './../assets/RabbitWReceipt_JSON.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
  };
  }

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
loginWithLinkedIn() {
  window.location.href = `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${
    this.linkedInCredentials.clientId
  }&redirect_uri=${this.linkedInCredentials.redirectUrl}&scope=${this.linkedInCredentials.scope}`;
} 
handleAnimation(anim: any) {
  this.anim = anim;
}

stop() {
  this.anim.stop();
}

play() {
  this.anim.play();
}

pause() {
  this.anim.pause();
}

setSpeed(speed: number) {
  this.animationSpeed = speed;
  this.anim.setSpeed(speed);
}

linkedInCredentials = {
  clientId: "865jxj838zh0j7",
  redirectUrl: "http://localhost:4200/validation",
  scope: "r_liteprofile%20r_emailaddress" // To read basic user profile data and email
};
}
