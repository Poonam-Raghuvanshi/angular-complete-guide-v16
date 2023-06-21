import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes, createUrlTreeFromSnapshot } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { AddProductsComponent } from './components/products/add-products/add-products.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { CustomerService } from './service/customer.service';
import { map } from 'rxjs/operators';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'customers', component:CustomerListComponent, children:[
    {path:':id/view', component:CustomerDetailsComponent},
    {path:'add', component:AddCustomerComponent}
  ]},
  {path:'products', component:ProductListComponent, children:[
    {path:':id/view', component:ProductDetailsComponent},
    {path:'add', component:AddProductsComponent}
  ],canActivate: [
    (next: ActivatedRouteSnapshot) => {
      return inject(CustomerService)
        .isLoggedIn().pipe(
          map((isLoggedIn) => 
            isLoggedIn ? true : createUrlTreeFromSnapshot(next, ['/', ' '])
          )
        );
    },
  ]},
  {path:'**', redirectTo:'', pathMatch: 'full'}  // Wildcard route should be the last statement
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// Relative paths get appended while absolute path not /server
export class AppRoutingModule { }
