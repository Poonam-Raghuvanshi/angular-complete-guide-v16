import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Product } from 'src/app/data/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{
  allProducts: Product[] = [];
  constructor() {}

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
   
  }
}
