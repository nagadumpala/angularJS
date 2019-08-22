import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-data-form',
    template: `
      <h1>Data Driven Forms</h1>
      <form action="#" method="get" novalidate [formGroup]="userForm">
          <label for="username">User Name : </label>
          <input type="text" required  formControlName="username" />
          <br/>
          <label for="useremail">User eMail : </label>
          <input type="email" required formControlName="useremail" pattern=".+@.+"/>
          <br/>
          <label for="userage">User Age : </label>
          <input required formControlName="userage" />
          <br/>
          <button [disabled]="userForm.invalid" (click)="clickHandler()" type="submit">Login</button>
       </form>

        <button (click)="fillFormPartial()">Fill Partial Data</button>
        <button (click)="fillFormFull()">Fill Complete Data</button>
      <p *ngIf="userForm.invalid">Form Invalid</p>
      <p *ngIf="userForm.dirty">Form Dirty</p>
      <p *ngIf="userForm.touched">Form Touched</p>
    
      <p *ngIf="!userForm.get('username').valid && userForm.get('username').touched">Do enter a valid user name</p>
      <p *ngIf="!userForm.get('useremail').valid && userForm.get('useremail').touched">Do enter a valid user email</p>
      <p *ngIf="!userForm.get('userage').valid && userForm.get('userage').touched">Do enter a valid age </p>
      <h1>
          User Name : {{ userForm.get('username').value }} <br/> 
          User Email : {{ userForm.get('useremail').value }} <br/> 
          User Age : {{ userForm.get('userage').value }}
      </h1>
  `,
  styles : [`
      label { width : 100px; display: inline-block; padding: 5px; margin: 5px}
      input.ng-invalid.ng-touched{ border : 2px solid crimson}
      input.ng-valid.ng-touched{ border : 2px solid darkseagreen}
    `]
})
export class ReactiveFormGroup{
    userForm:FormGroup;

    ngOnInit() {
        this.userForm = new FormGroup({
          username : new FormControl(),
          useremail : new FormControl(),
          userage : new FormControl()
        })
      }

      clickHandler(){
        console.log(this.userForm.get('username').value);
     }

     fillFormPartial(){
        this.userForm.patchValue({
          username : 'Bruce'
        })
      }
      fillFormFull(){
         this.userForm.setValue({
           username : 'Bruce',
           userage : 20,
           useremail : 'bruce@wayne.com'
         })
      }
}