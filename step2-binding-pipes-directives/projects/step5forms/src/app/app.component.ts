import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>fd</h1>
  <form action="#" name="user">
    <label for="uname"> click me</label>
    <input id="uname" type="text">
  `
})
export class AppComponent {
  title = 'step5forms';
}
