import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '../okta-auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  constructor(
    private service: ApiServiceService,
    private router: Router,
    private oktaAuth: OktaAuthService

  ) { }
  currentUserEmail:string;
  ngOnInit() {
this.getCurrentUserEmail()
  }

  routeToAddSweep() {
    this.router.navigate(['/layout/addsweep'])
  }

  routeToSweepList() {
    this.router.navigate(['layout/sweeplist'])
  }

  logoutToHome() {
    this.oktaAuth.logout();

  }

  getCurrentUserEmail(){
    const oktaStorage = JSON.parse( localStorage.getItem('okta-token-storage'));
    this.currentUserEmail = oktaStorage.idToken.claims.email;

    // alert(this.currentUserEmail)

    const domain = this.currentUserEmail.split('@').pop().split('.')[0]

    console.log(domain);
    if(domain.includes('baskcart'))
    {
      alert('admin')
    }
    else{
      alert('simple User')
    }

  }

}
