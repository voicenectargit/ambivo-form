import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AmbivoFormComponent } from './ambivo-form.component';
import { StepperTypeComponent } from './types/stepper-type/stepper-type.component';
import { InputTypeComponent } from './types/input-type/input-type.component';
import { TextareaTypeComponent } from './types/textarea-type/textarea-type.component';
import { CheckboxTypeComponent } from './types/checkbox-type/checkbox-type.component';
import { RadioTypeComponent } from './types/radio-type/radio-type.component';
import { SelectTypeComponent } from './types/select-type/select-type.component';
import { FormFieldTypeComponent } from './types/form-field-type/form-field-type.component';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { DateTypeComponent } from './types/date-type/date-type.component';
import { MoneyTypeComponent } from './types/money-type/money-type.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { FontLoaderComponent } from './font-loader/font-loader.component';

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
    DateTypeComponent,
    MoneyTypeComponent,
    SnackbarComponent,
    FontLoaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormlySelectModule,
    FormlyModule.forChild(),
    CurrencyMaskModule,
  ],
  exports: [AmbivoFormComponent],
})
export class AmbivoFormModule {}
