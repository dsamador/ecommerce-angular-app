import { PasswordModule } from './password/password.module';
import { FormFieldModule } from './form-field/form-field.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    PasswordModule
  ],
  exports: [
    InputModule,
    FormFieldModule,
    PasswordModule
  ]
})
export class ControlsModule { }
