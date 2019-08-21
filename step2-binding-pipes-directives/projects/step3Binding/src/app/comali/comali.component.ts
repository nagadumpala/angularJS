import { Component } from '@angular/core';

@Component({
  selector: 'app-comali',
  template: `
    <p ngNonBindable> {{ komli works! }} </p>
    <hr>
    <input [(ngModel)]="agree" type="checkbox">
    <p *ngIf="agree">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quas quos corporis odit, aspernatur tenetur et officia ea, a, nam fuga sequi fugit. Nisi consequuntur aliquam amet doloremque magnam modi!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quas quos corporis odit, aspernatur tenetur et officia ea, a, nam fuga sequi fugit. Nisi consequuntur aliquam amet doloremque magnam modi!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quas quos corporis odit, aspernatur tenetur et officia ea, a, nam fuga sequi fugit. Nisi consequuntur aliquam amet doloremque magnam modi!
    </p>

    <input [(ngModel)]="power" type="range" min="0" max="10" step="1">
    <h2> power is : {{power}} </h2>

  <hr>
  <h2> Ironman is now
  <span [(ngSwitch)]="power">
    <span *ngSwitchCase="5"><input #ti2 type="text" [(value)]="powerVal" ></span>
    <span *ngSwitchCase="6"><input #ti2 type="text" [(value)]="powerVal" ></span>
    <span *ngSwitchCase="7"><input #ti2 type="text" [(value)]="powerVal" ></span>
    <span *ngSwitchCase="8">very strong</span>
    <span *ngSwitchCase="9">super strong</span>
    <span *ngSwitchDefault>Out of  strong</span>
    </span> 
  </h2>

  `,
})
export class ComaliComponent{
  agree = true;
  power = 5;
  powerVal = "weak";

  getPower(){
    if(this.power===6){
      this.powerVal= "strong";
    }else if(this.power===7){
      this.powerVal= "super strong";
    }
  }
}