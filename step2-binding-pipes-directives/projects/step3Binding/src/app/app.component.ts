import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> Hi </h1>
  <hr>
  <input #ti1 (change)="title = ti1.value"  [value]="title" type="text">
  <hr>
  <input [(ngModel)]="title" type="text">


  <h2>{{title}}</h2>
  `
})
export class AppComponent {
  title = 'step3Binding';
}
