import { Component } from '@angular/core';
import { OktaAuthService } from './okta-auth.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArduinoProject';
  isAuthenticated: boolean;
  constructor(public oktaAuth: OktaAuthService) { }

  ngOnInit(): void {
    this.oktaAuth.$isAuthenticated.subscribe(val => this.isAuthenticated = val);
  }
}
