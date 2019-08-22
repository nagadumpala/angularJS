import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template : `
  <div class="box">
    <h1 [innerHTML]="title"></h1>
    <input [(ngModel)]="title" type="text">
    <app-child [citi]="title">
      <h2>Hello Child Component from Heading 2</h2>
      <h2>Hello Child Component from Heading 2</h2>
      <h3>Hello Child Component from Heading 3</h3>
      <h2 class="citi">Hello Citi Component</h2>
      <h2>Hello Child Component from Heading 2</h2>
    </app-child>
  </div>
  `,
  styles: [`
    .box{
      padding : 10px;
      margin : auto;
      background-color : silver;
      border : 1px solid slategray;
    }
  `]
})
export class AppComponent {
  title = 'Main Component';
  citiEventHAndler(evt){
  alert('dd'+ evt);
  }
}