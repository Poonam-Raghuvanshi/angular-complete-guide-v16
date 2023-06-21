import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent implements OnInit {
  addProduct: FormGroup;
  forbiddenProducts = ['Test', 'Dummy'];
//   const formOptions: AbstractControlOptions = {
//     validators: Validators.required,
//     asyncValidators: this.forbiddenNames(this.forbiddenProducts)
//  }
  constructor() {}
  ngOnInit(): void {
    this.addProduct = new FormGroup({
      firstName: new FormControl(null,Validators.compose([
        Validators.required,
        Validators.maxLength(64),
      ])),
      manufacturing: new FormControl(null,[Validators.min(2), Validators.max(4)]),
      expiry: new FormControl(null),
      description: new FormControl(null)
    });

    // two important method 

    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

  //   this.signupForm.statusChanges.subscribe((status) => console.log(status));
  //   this.signupForm.setValue({
  //     userData: {
  //       username: 'Max',
  //       email: 'max@test.com',
  //     },
  //     gender: 'male',
  //     hobbies: [],
  //   });
  //   this.signupForm.patchValue({
  //     userData: {
  //       username: 'Anna',
  //     },
  //   });
  // }
  }
  onSubmit() {}

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProducts.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
