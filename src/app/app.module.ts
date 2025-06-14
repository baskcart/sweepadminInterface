import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { LinkedResponseCheckComponent } from './linked-response-check/linked-response-check.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { SigninComponent } from './signin/signin.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthInterceptor } from './okta-auth.service';
import { ToastrModule } from 'ngx-toastr';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { AddProductComponent } from './add-product/add-product.component';
import { AddShopComponent } from './add-shop/add-shop.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { ViewBrandComponent } from './components/view-brand/view-brand.component';
import { ViewShopComponent } from './components/view-shop/view-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    ProductAddComponent,
    ProductListComponent,
    DashboardComponent,
    LinkedResponseCheckComponent,
    HomePageComponent,
    SigninComponent,
    CallbackComponent,
    AddProductComponent,
    AddShopComponent,
    AddBrandComponent,
    ViewBrandComponent,
    ViewShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // NzDatePickerModule,
    BrowserAnimationsModule,
    LottieAnimationViewModule.forRoot(),
    ToastrModule.forRoot(),
    AutocompleteLibModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
