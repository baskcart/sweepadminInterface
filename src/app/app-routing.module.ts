import { ViewShopComponent } from './components/view-shop/view-shop.component';
import { ViewBrandComponent } from './components/view-brand/view-brand.component';
import { AddShopComponent } from './add-shop/add-shop.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OktaAuthGuard } from './app.guard';
import { CallbackComponent } from './callback/callback.component';
import { SigninComponent } from './signin/signin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkedResponseCheckComponent } from './linked-response-check/linked-response-check.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},

  {path:'login',component:LoginComponent},
  {path:'validation',component:LinkedResponseCheckComponent},
  {path:'signin',component:SigninComponent},
  {path:'login',component:LoginComponent},
  {path: 'callback', component: CallbackComponent},
  // ,{path:'homed',component:HomePageComponent},
  {path:'layout',component:AdminLayoutComponent,

  canActivate: [OktaAuthGuard],
  children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'addsweep',component:ProductAddComponent},
    {path:'sweeplist',component:ProductListComponent},
    {path:'add-product',component:AddProductComponent},
    {path:'add-shop',component:AddShopComponent},
    {path:'add-brand',component:AddBrandComponent},
    {path:'view-brand',component:ViewBrandComponent}
    ,{path:'view-shops',component:ViewShopComponent}



  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
