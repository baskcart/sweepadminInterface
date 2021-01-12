import { ApiServiceService } from './../api-service.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { product } from './product';
declare var $: any;


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit,AfterViewInit {

  constructor(private service : ApiServiceService) { } 

  obj: product = new product();
  
  ngOnInit() {
  
  }

  
  
  ngAfterViewInit() {
    $(document).ready(function () {
      var navListItems = $('div.setup-panel div a'),
              allWells = $('.setup-content'),
              allNextBtn = $('.nextBtn');
    
      allWells.hide();
    
      navListItems.click(function (e) {
          e.preventDefault();
          var $target = $($(this).attr('href')),
                  $item = $(this);
    
          if (!$item.hasClass('disabled')) {
              navListItems.removeClass('btn-primary').addClass('btn-default');
              $item.addClass('btn-primary');
              allWells.hide();
              $target.show();
              $target.find('input:eq(0)').focus();
          }
      });
    
      allNextBtn.click(function(){
          var curStep = $(this).closest(".setup-content"),
              curStepBtn = curStep.attr("id"),
              nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
              curInputs = curStep.find("input[type='text'],input[type='url']"),
              isValid = true;
    
          $(".form-group").removeClass("has-error");
          for(var i=0; i<curInputs.length; i++){
              if (!curInputs[i].validity.valid){
                  isValid = false;
                  $(curInputs[i]).closest(".form-group").addClass("has-error");
              }
          }
    
          if (isValid)
              nextStepWizard.removeAttr('disabled').trigger('click');
      });
    
      $('div.setup-panel div a.btn-primary').trigger('click');
    });
  }

  onChange(value){
    this.obj.endDate = value;
  }





  save(){
  console.log(this.obj)
  this.service.insertSweep(this.obj).subscribe(d=>{
    console.log(d);
  })
  }

 

  
}
