import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { AddProductsComponent } from './components/products/add-products/add-products.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductDetailsComponent,
    AddCustomerComponent,
    AddProductsComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//No Directive found means formsmodule is not imported in the app.module.ts
