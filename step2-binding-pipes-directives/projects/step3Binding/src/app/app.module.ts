import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridComponent } from './grid.component';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header.component';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GridComponent,HeaderComponent,MainComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [HeroService],
  bootstrap: [MainComponent]
})
export class AppModule { }
