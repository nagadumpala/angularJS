import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactive-form-builder',
    template:`
    <h1>Forms with Form Builder</h1>
    <form [formGroup]="userForm" novalidate>
    <label for="username">User Name : </label>
    <input type="text" formControlName="username"  />
    <br/>
    <label for="useremail">User eMail : </label>
    <input type="email" formControlName="useremail"  />
    <br/>
    <label for="userage">User Age : </label>
    <input required formControlName="userage"   />
    <br/>
    <button [disabled]="userForm.invalid" type="submit" (click)="clickHandler()">Login</button>
    <br>
    <button (click)="generateSetData()" type="submit">Test Full Data | setValue</button>
    <br>
    <button (click)="generatePatchData()" type="submit">Test Partial Data | patchValue</button>
  
    </form>
  
    <p *ngIf="userForm.invalid">Form Invalid</p>
    <p *ngIf="userForm.dirty">Form Dirty</p>
    <p *ngIf="userForm.touched">Form Touched</p>
  
    <p *ngIf="!userForm.get('username').valid && userForm.get('username').touched">Do enter a valid user name</p>
    <p *ngIf="!userForm.get('useremail').valid && userForm.get('useremail').touched">Do enter a valid user email</p>
    <p *ngIf="!userForm.get('userage').valid && userForm.get('userage').touched">Do enter a valid age </p>
    <h1>User Name : {{ userForm.get('username').value }} <br/> User Email : {{ userForm.get('useremail').value }} <br/> User Age : {{ userForm.get('userage').value }}</h1>
  
    `,
    styles : [`
      label { width : 100px; display: inline-block; padding: 5px; margin: 5px}
      input.ng-invalid.ng-touched{ border : 2px solid crimson}
      input.ng-valid.ng-touched{ border : 2px solid darkseagreen}
    `] 
})
export class ReactiveFormBuilderComponent{
    userForm:FormGroup;
     constructor(private fb:FormBuilder){}
     ngOnInit(){
        /*
         this.userForm = this.fb.group({
             username : "",
             useremail : "",
             userage : ""
            });
        */
       /*
       this.userForm = this.fb.group({
           username : {value : '', disabled: false},
           useremail :  {value : '', disabled: false},
           userage : {value : '22', disabled: true}
        });
        */
        /*
        */
        this.userForm = this.fb.group({
            // [defaultvalue, validations use an array for more validations]
            username : ["", Validators.required],
            useremail : ["",[Validators.required, Validators.pattern('.+@.+')]],
            userage : ["22"]
        });

     }

     generateSetData(){
        this.userForm.setValue({
            username:'Bruce',
            useremail:'bruce@waynefoundation.com',
            userage:30
        });
     }

     generatePatchData(){
        this.userForm.patchValue({
            username:'Bruce'
        })
     }
     clickHandler(){
        console.log(this.userForm.get('username').value);
     }
}