import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from 'src/app/data/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit, OnDestroy {

  allCustomers: Customer[] = [
    new Customer(1,"Poonam","Raghuvanshi","raghu43@gmail.com",976454,"Stradiviras store","female"),
    new Customer(2,"Jean","Francois","cornu5@gmail.com",54637,"Paramaeasan","male")
  ];

  constructor() {}

  ngOnInit(): void {
   
  }

  ngOnDestroy(): void {
    
  }
}
