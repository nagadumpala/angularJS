import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  Forms in Angular
  <app-template-form></app-template-form>
  <hr>
  <app-data-form></app-data-form>
  <hr>
  <app-reactive-form-builder></app-reactive-form-builder>
  `
})
export class AppComponent {
  title = 'step3forms';
}