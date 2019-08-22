import { Component, Input } from '@angular/core';

@Component({
  selector : 'app-header',
  template : `
<ul class="nav">
  <li class="nav-item" *ngFor= "let hero of herolist">
    <a class="nav-link" href="#">{{hero.title}}</a>
  </li>
</ul>
 `
})
export class HeaderComponent{
  @Input('data') 
  herolist = [];
}