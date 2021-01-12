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

  routeToAddProduct(){
  this.router.navigate(['/layout/addproduct'])
  }

  routeToProductList(){
    this.router.navigate(['layout/productlist'])
  }

  routeToDashboard(){
    this.router.navigate(['layout/dashboard'])
  }
   date = "2020-12-20"

  getSweeps(){
    this.service.getSweepsByDate(this.date).subscribe(d=>{
      console.log("Res",d);
    })
  }

  logoutToHome(){
    this.router.navigate(['login'])
  
  }

}
