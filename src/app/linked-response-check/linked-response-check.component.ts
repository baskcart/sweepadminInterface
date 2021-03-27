import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-linked-response-check',
  templateUrl: './linked-response-check.component.html',
  styleUrls: ['./linked-response-check.component.css']
})
export class LinkedResponseCheckComponent implements OnInit {
code
  constructor(private activatedRoute :ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(d=>{
      this.code = d['code'];
      console.log(this.code);
      if(!this.code)
      {
        this.router.navigate(['layout'])
      }
      else{
        // this.toastr.success("Login Sucessfull")
        this.router.navigate(['layout'])
      }
      
    })
  }

}
