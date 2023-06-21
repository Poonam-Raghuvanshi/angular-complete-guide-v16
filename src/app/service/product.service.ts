import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  activatedEmitter= new Subject<boolean>();
  constructor() {
    this.createObservable.subscribe({
      next: (response) => console.log(response),
      error: (data) => console.log(data),
      complete: () => console.log(),
    });
   //We can create subjects and assigns value to them 
   //this.activatedEmitter.next(true);
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
