import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private service : ApiServiceService) { }

  data = [];

  ngOnInit() {
    this.getSweep();
  }


  getSweep (){
    this.service.getSweeps().subscribe(d=>{
      this.data = d;
      console.log(d);
      
    })

  }

}
