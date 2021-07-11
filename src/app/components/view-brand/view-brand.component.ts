import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-view-brand',
  templateUrl: './view-brand.component.html',
  styleUrls: ['./view-brand.component.css']
})
export class ViewBrandComponent implements OnInit {

  constructor(private serice: ApiServiceService, private toastr: ToastrService) { }
brands:[]
  ngOnInit() {
    this.serice.getAllBrands().subscribe(d=>{
      this.brands = d;
    })
  }

}
