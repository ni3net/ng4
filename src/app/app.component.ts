import { Component } from '@angular/core';
import  { DataService} from './data.service';
@Component({
  selector: 'app-root',

  template: `
     
  <input #box (keyup.Enter)="onEnter(box.value)" [value]='value'>
      <input type="button" [disabled]="isDisabled" value="click Me"  />
  <h1>    {{box.value}}    </h1>
  <div [style.color]="'red'" [innerText]='value'>      </div>

  <div [innerText]="carsData"></div>
  `,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  isDisabled = false;
  value = '';
  carsData='';
  myCustomecss = {

    requierd: true,
    ok: true
  };

  constructor(private dataService:DataService){

  }
  
  ngOnInit(){
    console.log(this.dataService.cars)

    this.carsData =this.dataService.myDate();
  }

  onEnter(value: string) {
    this.value = value;
    //this.myCustomecss = this.value == '' ? true : false;
  }


}
