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
    <input #ti1 type="text">
    <button (click)="citiEventDispacher(ti1.value)">Generate Citi Event</button>
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
  @Input() citiprop = "default value";
  @Output() citiEvent: EventEmitter<any> = new EventEmitter();
  citiEventDispacher(message){
    this.citiEvent.emit(message);
  }
}