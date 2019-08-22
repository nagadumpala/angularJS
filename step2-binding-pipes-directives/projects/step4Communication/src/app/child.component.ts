import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  template: `
  <div class="childbox">
    <h1>Child Component</h1>
    <ng-content select="h3"></ng-content>
    <ng-content></ng-content>
    <ng-content select="[class='citi']"></ng-content>
    <ul>
      <li>{{ citiprop }}</li>
    </ul>

    <hr>
    <button (click)="clickHandler()"></button>
  </div>
  `,
  styles: [`
    .childbox{
      padding : 10px;
      margin : auto;
      background-color : orange;
      border : 1px solid red;
    }
  `]
})
export class ChildComponent{
  @Input('citi') 
  citiprop = "default value";
  @Output('citi') 
  citievent: EventEmitter<any> = new EventEmitter();
  
  clickHandler(){
    this.citievent.emit();
  }


}