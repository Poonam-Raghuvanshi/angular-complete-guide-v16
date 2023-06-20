import { Component,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  genders:string[]=['male','female']
  //Another way of accessing the Form
  //@ViewChild('customerReg') customerReg!:NgForm;
  //use of the ! non-null assertion operator in @ViewChild('customerReg') customerReg!: NgForm;. This tells 
  //TypeScript that you're confident the customerReg property will be initialized at runtime, even though it is not set in the constructor.
  constructor(){

  }
  ngOnInit(): void {
   
  }
  saveCustomer(form: NgForm){
     console.log(form.value);
  }
  

}
