import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { AddProductsComponent } from './components/products/add-products/add-products.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ServerComponent } from './components/server/server.component';
import { PartComponent } from './components/part/part.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './components/notes/notes.component';
import { LoggingInterceptorService } from './interceptors/logging-interceptors.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductDetailsComponent,
    AddCustomerComponent,
    AddProductsComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    ProductListComponent,
    ServerComponent,
    PartComponent,
    HighlightDirective,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

//No Directive found means formsmodule is not imported in the app.module.ts
