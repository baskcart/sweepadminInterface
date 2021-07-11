import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-view-shop',
  templateUrl: './view-shop.component.html',
  styleUrls: ['./view-shop.component.css']
})
export class ViewShopComponent implements OnInit {

  constructor(private serice: ApiServiceService, private toastr: ToastrService) { }
  shops:[]
    ngOnInit() {
      this.serice.getAllShops().subscribe(d=>{
        this.shops = d;
      })
    }

}
