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

  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
