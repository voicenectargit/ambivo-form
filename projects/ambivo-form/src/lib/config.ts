import { StepperTypeComponent } from './types/stepper-type/stepper-type.component';
import { CustomEmailValidator } from './validators/email.validator';
import { UrlValidator } from './validators/url.validator';
import { InputTypeComponent } from './types/input-type/input-type.component';
import { TextareaTypeComponent } from './types/textarea-type/textarea-type.component';
import { SelectTypeComponent } from './types/select-type/select-type.component';
import { CheckboxTypeComponent } from './types/checkbox-type/checkbox-type.component';
import { RadioTypeComponent } from './types/radio-type/radio-type.component';
import { FormFieldTypeComponent } from './types/form-field-type/form-field-type.component';
import { DateTypeComponent } from './types/date-type/date-type.component';
import { MoneyTypeComponent } from './types/money-type/money-type.component';
import { FileTypeComponent } from './types/file-type/file-type.component';
import { ButtonsTypeComponent } from './types/buttons-type/buttons-type.component';
import { StepTypeComponent } from './types/step-type/step-type.component';
import { timezones } from './utils/timezones';
import { ImageTypeComponent } from './types/image-type/image-type.component';
import { GalleryTypeComponent } from './types/gallery-type/gallery-type.component';
import { MulticheckboxTypeComponent } from './types/multicheckbox-type/multicheckbox-type.component';

export const config = {
  types: [
    { name: 'input', component: InputTypeComponent, wrappers: ['form-field'] },
    {
      name: 'textarea',
      component: TextareaTypeComponent,
      wrappers: ['form-field'],
    },
    {
      name: 'select',
      component: SelectTypeComponent,
      wrappers: ['form-field'],
    },
    {
      name: 'checkbox',
      component: CheckboxTypeComponent,
    },
    {
      name: 'multicheckbox',
      component: MulticheckboxTypeComponent,
    },
    { name: 'radio', component: RadioTypeComponent },
    {
      name: 'stepper',
      component: StepperTypeComponent,
    },
    {
      name: 'step',
      component: StepTypeComponent,
    },
    {
      name: 'number',
      component: InputTypeComponent,
      wrappers: ['form-field'],
      defaultOptions: { templateOptions: { type: 'number' } },
    },
    {
      name: 'phone',
      component: InputTypeComponent,
      wrappers: ['form-field'],
      defaultOptions: { templateOptions: { minLength: 8 } },
    },
    {
      name: 'email',
      component: InputTypeComponent,
      wrappers: ['form-field'],
      defaultOptions: {
        validators: { validation: ['email'] },
      },
    },
    {
      name: 'url',
      component: InputTypeComponent,
      wrappers: ['form-field'],
      defaultOptions: {
        ralidators: { validation: ['url'] },
      },
    },
    {
      name: 'date',
      component: DateTypeComponent,
      wrappers: ['form-field'],
      defaultOptions: { templateOptions: { enableTime: false } },
    },
    {
      name: 'datetime',
      component: DateTypeComponent,
      wrappers: ['form-field'],
      defaultOptions: { templateOptions: { enableTime: true } },
    },
    {
      name: 'timezone',
      component: SelectTypeComponent,
      wrappers: ['form-field'],
      defaultOptions: {
        templateOptions: {
          options: timezones.map((v) => ({ value: v })),
        },
      },
    },
    {
      name: 'money',
      component: MoneyTypeComponent,
      wrappers: ['form-field'],
      defaultOptions: { templateOptions: { currency: '$' } },
    },
    { name: 'file', component: FileTypeComponent, wrappers: ['form-field'] },
    { name: 'buttons', component: ButtonsTypeComponent },
    { name: 'image', component: ImageTypeComponent },
    { name: 'gallery', component: GalleryTypeComponent },
  ],
  wrappers: [{ name: 'form-field', component: FormFieldTypeComponent }],
  validators: [
    { name: 'email', validation: CustomEmailValidator },
    {
      name: 'url',
      validation: UrlValidator,
    },
  ],
  validationMessages: [
    { name: 'required', message: 'This field is required' },
    { name: 'email', message: 'Please enter a valid Email' },
    { name: 'url', message: 'Please enter a valid URL' },
    /*
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
    */
  ],
  extras: { lazyRender: true },
};
