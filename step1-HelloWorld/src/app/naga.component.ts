import { Component } from '@angular/core';

@Component({
  selector: 'naga-root',
  template: `
  <div> 
       <h1 [innerHTML]="title"> </h1>   
    <button (click)="clickHAndler()">Clcik ME</button>   
    <hr> 
    <input [value]="title" type="text">
    <hr> 
    <input #til type="text">
    <hr> 
    <button (click)="checkValueHandler(til.value)">Check value</button>   
  <img [src]="photo">
  <img bind-src="photo">
  <img src={{photo}}>
    </div>
   
    `         
})
export class NagaComponent {         
  title = 'HelloWorld !!';
  photo = 'assets/images/rajani.jpg   ';
  clickHAndler(){
    alert('Heallo');
  }   

  checkValueHandler(mesg:string){
    alert('Heallo  '+mesg);
  }   
} 
