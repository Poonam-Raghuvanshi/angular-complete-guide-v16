import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/data/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  genders: string[] = ['male', 'female'];
  //Another way of accessing the Form
  //@ViewChild('customerReg') customerReg!:NgForm;
  //use of the ! non-null assertion operator in @ViewChild('customerReg') customerReg!: NgForm;. This tells
  //TypeScript that you're confident the customerReg property will be initialized at runtime, even though it is not set in the constructor.
  constructor(private customerService: CustomerService) {}
  ngOnInit(): void {
    // this.customerReg.setValue({}) can use this to set whole form value
    // this.customerReg.form.patchValue({}) can use this to set part of the value
  }

  saveCustomer(form: NgForm) {
   // console.log(form.value);
    this.customerService.addCustomer(form.value.userData);
    form.reset();
  }
}
