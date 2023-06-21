import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { AddProductsComponent } from './components/products/add-products/add-products.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'customers', component:CustomerListComponent, children:[
    {path:':id/view', component:CustomerDetailsComponent},
    {path:'add', component:AddCustomerComponent}
  ]},
  {path:'products', component:ProductListComponent, children:[
    {path:':id/view', component:ProductDetailsComponent},
    {path:'add', component:AddProductsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// Relative paths get appended like /server
export class AppRoutingModule { }
