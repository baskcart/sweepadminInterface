import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { Shop } from './shop';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {


  shop = new Shop();
  invalidShopTitle = false;
  ngOnInit() {
  }
  constructor(private serice: ApiServiceService, private toastr: ToastrService,private router:Router) { }
  addShop(form:NgForm) {
    if (!this.shop.title) {
      this.invalidShopTitle = true;

    }
    else {
      this.serice.addShop(this.shop).subscribe(d => {
        this.toastr.success('Shop Added Sucessfully');
        form.reset();
        // this.router.navigate(['/layout/view-shops']);
      })

    }
  }
}
