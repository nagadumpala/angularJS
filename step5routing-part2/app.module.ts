import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { IronmanComponent } from './ironman.component';
import { BatmanComponent } from './batman.component';
import { SupermanComponent } from './superman.component';
import { NotFoundComponent } from './notfound.component';

@NgModule({
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    IronmanComponent, 
    BatmanComponent, 
    SupermanComponent,
    NotFoundComponent ],

  imports: [
    BrowserModule, RouterModule.forRoot([
      { path : "", component : HomeComponent },
      { path : "batman", component : BatmanComponent },
      { path : "batman/:stock", component : BatmanComponent },
      { path : "ironman", component : IronmanComponent },
      { path : "superman", component : SupermanComponent },
      { path : "spiderman", redirectTo:"ironman", pathMatch:"full"},
      { path : "**", component : NotFoundComponent },
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
