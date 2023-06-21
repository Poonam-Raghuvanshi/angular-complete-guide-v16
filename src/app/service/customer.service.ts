import { EventEmitter, Injectable } from '@angular/core';
import { Customer } from '../data/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

 // statusUpdated=new EventEmitter<string>();
  allCustomers: Customer[] = [
    new Customer(1,"Poonam","Raghuvanshi","raghu43@gmail.com",976454,"Stradiviras store","female",10),
    new Customer(2,"Jean","Francois","cornu5@gmail.com",54637,"Paramaeasan","male",20),
    new Customer(3,"Priya","Sharma","priya6@outlook.com",5463337,"Near Saint maisons","female",20)
  ];
  constructor() { }

  addCustomer(cust:Customer){
      this.allCustomers.push(cust);
     
  }
}
