import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { templateformComponent } from './templateform.component';
import { ReactiveFormGroup } from './reactiveFormGroup.component';
import { ReactiveFormBuilderComponent } from './reactiveFormBuilder.component';

@NgModule({
  declarations: [
    AppComponent, templateformComponent, ReactiveFormGroup, ReactiveFormBuilderComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }