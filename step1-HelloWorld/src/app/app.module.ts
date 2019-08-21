import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NagaComponent } from './naga.component';

@NgModule({
  declarations: [
    AppComponent, NagaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, NagaComponent]
})
export class AppModule { }
