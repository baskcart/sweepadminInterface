import { Component, OnInit } from '@angular/core';
import { OktaAuthService} from '../okta-auth.service'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public oktaAuth: OktaAuthService) { }

  ngOnInit() {
  }

}
