import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComaliComponent } from './comali/comali.component';

@NgModule({
  declarations: [
    ComaliComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [ComaliComponent]
})
export class AppModule { }
