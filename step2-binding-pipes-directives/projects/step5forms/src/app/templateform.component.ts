import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
//  html5 validations
//  css validations
//  javascript validations
//  -------------------------
//  minimum
//  maximum
//  require
//  pattern
//  -------------------------
// Untouched
// Touched
// Prestine
// Dirty
// Valid
// Invalid
//  -------------------------
@Component({
    selector : 'app-template-form',
    template : `
    <h1>Template Driven Forms</h1>
    <form action="#" (submit)="formSubmitHandler(myForm,$event)"  #myForm="ngForm"  method="get" name="myform" novalidate>
    <label for="username">User Name : </label>
    <input type="text" #unameInput="ngModel" [(ngModel)]="uname" name="username" required  />
    <br/>
    <label for="useremail">User eMail : </label>
    <input type="email" #uemailInput="ngModel" [(ngModel)]="uemail" name="useremail" required pattern=".+@.+"/>
    <br/>
    <label for="userage">User Age : </label>
    <input #uageInput="ngModel" [(ngModel)]="uage" name="userage" required />
    <br/>
    <button [disabled]="myForm.invalid" type="submit">Login</button>
  </form>
  <p *ngIf="unameInput.invalid && unameInput.touched">Do enter a valid user name</p>
  <p *ngIf="uemailInput.invalid && uemailInput.touched">Do enter a valid user email</p>
  <p *ngIf="uageInput.invalid && uageInput.touched">Do enter a valid age </p>
  <h1>User Name : {{ uname }} <br/> User Email : {{ uemail }} <br/> User Age :{{ uage }}</h1>
    `,
    styles : [`
    label { width : 100px; display: inline-block; padding: 5px; margin: 5px}
    input.ng-invalid.ng-touched{ border : 2px solid crimson}
    input.ng-valid.ng-touched{ border : 2px solid darkseagreen}
  `]
})
export class templateformComponent{
    uname = '';
    uemail = '';
    uage = '';
    formSubmitHandler( formElement:NgForm, evt ) {
        evt.preventDefault();
        if(formElement.controls.userage.value < 18){
          alert("you are too young to apply");
        }else if(formElement.controls.userage.value > 88){
          alert("you are too old to apply");
        }else{
          evt.target.submit();
        }
  
  //  console.log(formElement.controls.userage.value);
  //  formElement.resetForm();
  //  formElement.submitted == true;
      console.log(formElement,evt);
    }
}