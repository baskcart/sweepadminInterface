import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '../okta-auth.service';
@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private okta: OktaAuthService) { }

  ngOnInit() {
    this.okta.handleAuthentication();
  }

}
