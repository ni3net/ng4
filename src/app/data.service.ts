import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = ['Ford', 'Maruti', 'Hundai'];
  myDate() {
    return 'This is my data, man!';
  }
}
