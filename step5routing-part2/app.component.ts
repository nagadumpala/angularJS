import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <h1>Hero Application</h1>
  <a [routerLink]="['']">Home</a> | 
  <a [routerLink]="['batman']">Batman</a> | 
  <a [routerLink]="['ironman']">Ironman</a> | 
  <a [routerLink]="['superman']">Superman</a> |
  <a [routerLink]="['spiderman']">Spiderman</a> |
  <a [routerLink]="['hulk']">Hulk</a>
  <hr>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'step5routing';
}
