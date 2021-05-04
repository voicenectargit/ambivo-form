import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';
import {
  FormlyBootstrapModule,
  FormlyFieldInput,
  FormlyFieldCheckbox,
  FormlyFieldRadio,
} from '@ngx-formly/bootstrap';

import { AmbivoFormComponent } from './ambivo-form.component';
import { CustomEmailValidator } from './validators/email.validator';
import { UrlValidator } from './validators/url.validator';
import { StepperTypeComponent } from './types/stepper-type/stepper-type.component';

@NgModule({
  declarations: [AmbivoFormComponent, StepperTypeComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'stepper',
          component: StepperTypeComponent,
        },
        {
          name: 'phone',
          component: FormlyFieldInput,
          wrappers: ['form-field'],
          defaultOptions: { templateOptions: { minLength: 8 } },
        },
        {
          name: 'email',
          component: FormlyFieldInput,
          wrappers: ['form-field'],
          defaultOptions: {
            validators: { validation: ['email'] },
          },
        },
        {
          name: 'url',
          component: FormlyFieldInput,
          wrappers: ['form-field'],
          defaultOptions: { validators: { validation: ['url'] } },
        },
        {
          name: 'checkbox',
          component: FormlyFieldCheckbox,
          defaultOptions: {
            templateOptions: { indeterminate: false, formCheck: 'stacked' },
          },
        },
        {
          name: 'radio',
          component: FormlyFieldRadio,
          defaultOptions: { templateOptions: { formCheck: 'stacked' } },
        },
      ],
      validators: [
        { name: 'email', validation: CustomEmailValidator },
        { name: 'url', validation: UrlValidator },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'email', message: 'Please enter a valid Email' },
        { name: 'url', message: 'Please enter a valid URL' },
        {
          name: 'min',
          message: (_, f) => `Minimum is ${f.templateOptions.min}`,
        },
        {
          name: 'max',
          message: (_, f) => `Maximum is ${f.templateOptions.max}`,
        },
        {
          name: 'minlength',
          message: (_, f) => `Minimum length is ${f.templateOptions.minLength}`,
        },
        {
          name: 'maxlength',
          message: (_, f) => `Maximum length is ${f.templateOptions.maxLength}`,
        },
      ],
      extras: { lazyRender: true },
    }),
    FormlyBootstrapModule,
  ],
  exports: [AmbivoFormComponent],
})
export class AmbivoFormModule {}
