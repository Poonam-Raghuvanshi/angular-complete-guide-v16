import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from 'src/app/data/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit, OnDestroy {

  custList: Customer[] = [];

  constructor(private customerService:CustomerService) {
    // Another way of injecting the logging service
    //  this.loggingService = inject(CustomerService);
  }

  ngOnInit(): void {
   this.custList= this.customerService.allCustomers;
  }

  ngOnDestroy(): void {
    
  }
}
