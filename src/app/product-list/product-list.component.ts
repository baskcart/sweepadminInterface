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
    const isAdmin = sessionStorage.getItem('isAdmin');
    if(isAdmin!="undefined"&&isAdmin=='true')
    {
      this.service.getAllSweeps().subscribe(d=>{
        this.data =d;
      })
    }

    else{
      const email = sessionStorage.getItem('email');
      this.service.getSweeps(email).subscribe(d=>{
        this.data = d;
        console.log(d);

      })

    }


  }

}
