import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';

import { AmbivoFormComponent } from './ambivo-form.component';
import { StepperTypeComponent } from './types/stepper-type/stepper-type.component';
import { InputTypeComponent } from './types/input-type/input-type.component';
import { TextareaTypeComponent } from './types/textarea-type/textarea-type.component';
import { CheckboxTypeComponent } from './types/checkbox-type/checkbox-type.component';
import { RadioTypeComponent } from './types/radio-type/radio-type.component';
import { SelectTypeComponent } from './types/select-type/select-type.component';
import { FormFieldTypeComponent } from './types/form-field-type/form-field-type.component';
import { FormlySelectModule } from '@ngx-formly/core/select';

@NgModule({
  declarations: [
    AmbivoFormComponent,
    StepperTypeComponent,
    InputTypeComponent,
    TextareaTypeComponent,
    CheckboxTypeComponent,
    RadioTypeComponent,
    SelectTypeComponent,
    FormFieldTypeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormlySelectModule,
    FormlyModule.forChild(),
  ],
  exports: [AmbivoFormComponent],
})
export class AmbivoFormModule {}
