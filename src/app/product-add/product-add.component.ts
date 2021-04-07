import { ApiServiceService } from "./../api-service.service";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { product } from "./product";
import { ToastrService } from "ngx-toastr";
declare var $: any;

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"],
})
export class ProductAddComponent implements OnInit, AfterViewInit {
  constructor(
    private service: ApiServiceService,
    private toastr: ToastrService
  ) {}

  obj: product = new product();
  date = new Date();
  data;

  brands = [];
  shops=[];
  products=[];

  ngOnInit() {
    this.totalBudget();
    // this.getBrandsFromApi();
    // this.getProductsFromApi();
    // this.getShopsFromApi();
  }
  getShopsFromApi(query) {
    this.service.getShopAutoComplete(query).subscribe((d) => {
      console.log(d);
      let id = 0;
      this.shops=[]

      // this.brands = d;
      d.map((shop) => {
        console.log(shop);

        let obj = {
          id: id + 1,
          name: shop,
        };
        this.shops.push(obj);
      });
    });
  }

  getProductsFromApi(query,brand,store) {
    this.service.getProductAutoComplete(query,brand,store).subscribe((d) => {
      console.log(d);
      let id = 0;
      this.products =[]
      // this.brands = d;
      d.map((product) => {
        console.log(product);

        let obj = {
          id: id + 1,
          name: product,
        };
        this.products.push(obj);
      });
    });
  }

  getBrandsFromApi(query,store) {
    this.service.getBrandAutoComplete(query,store).subscribe((d) => {
      console.log(d);
      let id = 0;
      this.brands =[]

      // this.brands = d;
      d.map((brand) => {
        console.log(brand);

        let obj = {
          id: id + 1,
          name: brand,
        };
        this.brands.push(obj);
      });
    });
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      var navListItems = $("div.setup-panel div a"),
        allWells = $(".setup-content"),
        allNextBtn = $(".nextBtn");
      //copied

      allWells.hide();

      navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr("href")),
          $item = $(this);

        if (!$item.hasClass("disabled")) {
          navListItems.removeClass("btn-primary").addClass("btn-default");
          $item.addClass("btn-primary");
          allWells.hide();
          $target.show();
          $target.find("input:eq(0)").focus();
        }
      });

      allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $(
            'div.setup-panel div a[href="#' + curStepBtn + '"]'
          )
            .parent()
            .next()
            .children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
          isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
          if (!curInputs[i].validity.valid) {
            isValid = false;
            $(curInputs[i]).closest(".form-group").addClass("has-error");
          }
        }

        if (isValid) nextStepWizard.removeAttr("disabled").trigger("click");
      });

      $("div.setup-panel div a.btn-primary").trigger("click");
    });
  }

  lastDay;
  selectDate(value) {
    let startDate = new Date(value);
    this.obj.endDate = null;
    this.lastDay =
      startDate.getFullYear() +
      "-" +
      this.checkZeroAppend((startDate.getMonth() + 1).toString()) +
      "-" +
      this.checkZeroAppend((startDate.getDate() + 7).toString());
    this.obj.endDate = this.lastDay;
  }

  checkZeroAppend(value: String) {
    return value.length == 1 ? "0" + value : value;
  }

  save() {
    console.log(this.obj);

    let sweepObject = {
      name: this.obj.store,
      publisherName: this.obj.brand,
      productName: this.obj.product,
      startDate: this.obj.startDate,
      endDate: this.obj.endDate,
      instantAmount: this.obj.instantAmount,
      instantLimit: this.obj.instantLimit,
      dailyAmount: this.obj.dailyAmount,
      dailyLimit: this.obj.dailyLimit,
      weeklyAmount: this.obj.weeklyAmount,
      weeklyLimit: this.obj.weeklyLimit,
      publicAddress: null,
      recoveryText: null,
      status: "New",
    };

    console.log(sweepObject);
    this.service.insertSweep(sweepObject).subscribe((d) => {});
  }

  totalBudget() {
    this.service.getSweeps().subscribe((d) => {
      this.data = d[0].instantAmount + d[0].dailyAmount + d[0].weeklyAmount;
      console.log(this.data);
    });
  }

  showError() {
    this.toastr.error("Please fill all the fields");
  }
  keyword = "name";
  data1 = [
    {
      id: 1,
      name: "Usa",
    },
    {
      id: 2,
      name: "England",
    },
  ];

  selectEvent(item) {
    // do something with selected item
    console.log(item);

    console.log(this.obj.brand);
    console.log(this.obj.product);
    console.log(this.obj.store);



  }

  onProductChangeSearch(val: string) {
    // fetch remote data from here
    console.log(val);
    if(val.length>=2)
    {

      this.getProductsFromApi(val,this.obj.brand.name,this.obj.store.name)
    }


    // And reassign the 'data' which is binded to 'data' property.
  }

  onBrandChangeSearch(val: string) {
    // fetch remote data from here
    console.log(val);
    console.log(this.obj.store);

    if(val.length>=2)
    {
        this.getBrandsFromApi(val,this.obj.store.name)
    }

    // And reassign the 'data' which is binded to 'data' property.
  }

  onStoreChangeSearch(val: string) {
    // fetch remote data from here
    console.log(val);
    if(val.length>=2)
    {
      this.getShopsFromApi(val);
    }

    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }
}
