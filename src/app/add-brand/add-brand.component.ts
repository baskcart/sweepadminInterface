import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from '../api-service.service';
import { Brand } from './brand';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
brand = new Brand();
constructor(private serice: ApiServiceService, private toastr: ToastrService) { }
addBrand() {
  if (!this.brand.title) {


  }
  else {
    this.serice.addBrand(this.brand).subscribe(d => {
      this.toastr.success('Brand Added Sucessfully')
    })

  }
}

  ngOnInit() {
  }


}
