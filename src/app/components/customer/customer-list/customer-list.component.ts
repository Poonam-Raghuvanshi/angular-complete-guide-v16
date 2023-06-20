import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from 'src/app/data/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit, OnDestroy {

  allCustomers: Customer[] = [
    new Customer(1,"Poonam","Raghuvanshi","raghu43@gmail.com",976454,"Stradiviras store","female",10),
    new Customer(2,"Jean","Francois","cornu5@gmail.com",54637,"Paramaeasan","male",20),
    new Customer(3,"Priya","Sharma","priya6@outlook.com",5463337,"Near Saint maisons","female",20)
  ];

  constructor() {}

  ngOnInit(): void {
   
  }

  ngOnDestroy(): void {
    
  }
}
