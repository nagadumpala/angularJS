import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector : 'app-main',
  template : `
  <h1> Hello from Citi Application </h1>
  <app-header [data]="herolist?.hl"></app-header>
  <app-grid [data]="herolist?.hl"></app-grid>
  `
})
export class MainComponent implements OnInit {
  herolist:any;
  constructor(private hs:HeroService){}
  ngOnInit(){
     this.hs.getHeroes().subscribe((data) => {
          this.herolist = data;
     });
  }
}