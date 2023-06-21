import { Observable, Observer } from 'rxjs';

export class Product {
  id: number = 0;
  name: string = '';
  brand: string = '';
  productionDate: Date = new Date();
  expiryDate: Date = new Date();

  constructor(
    id: number,
    name: string,
    brand: string,
    productionDate: Date,
    expiryDate: Date
  ) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.productionDate = productionDate;
    this.expiryDate = expiryDate;
    
    this.createObservable.subscribe({
      next:response=> console.log(response),
      error: data=> console.log(data),
      complete: ()=> console.log()
    });
  }

  createObservable = new Observable<number>((observer: Observer<number>) => {
    let count = 0;
    const intervalId = setInterval(() => {
      observer.next(count++);
      if (count === 2) {
        observer.error(new Error('Hello world'));
      }
      if (count > 4) {
        observer.complete();
        clearInterval(intervalId);
      }
    }, 1000);
  });
 
}
