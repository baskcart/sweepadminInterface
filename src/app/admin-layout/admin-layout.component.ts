import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private service: ApiServiceService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  routeToAddSweep() {
    this.router.navigate(['/layout/addsweep'])
  }

  routeToSweepList() {
    this.router.navigate(['layout/sweeplist'])
  }

  logoutToHome() {
    this.router.navigate(['login'])

  }

}
