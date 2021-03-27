import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  constructor() { }

  ngOnInit() {
    
    let videos:any = document.getElementById('vid');
    videos.play()

    this.lottieConfig = {
      path: './../assets/RabbitWReceipt_JSON.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }
  
  loginWithLinkedIn() {
    window.location.href = `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${
      this.linkedInCredentials.clientId
      }&redirect_uri=${this.linkedInCredentials.redirectUrl}&scope=${this.linkedInCredentials.scope}`;
  }

  
  linkedInCredentials = {
    clientId: "865jxj838zh0j7",
    redirectUrl: "http://localhost:4200/validation",
    scope: "r_liteprofile%20r_emailaddress" // To read basic user profile data and email
  };

}
