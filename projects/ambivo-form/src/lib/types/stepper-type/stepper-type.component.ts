import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'stepper-type',
  templateUrl: './stepper-type.component.html',
  styleUrls: ['./stepper-type.component.scss'],
})
export class StepperTypeComponent extends FieldType {
  currentStep = 0;

  get length(): number {
    return this.field.fieldGroup?.length;
  }

  isValid(field: FormlyFieldConfig) {
    if (field.key) {
      return field.formControl.valid;
    }
    return field.fieldGroup.every((f) => this.isValid(f));
  }

  next(): void {
    this.currentStep++;
  }

  prev(): void {
    this.currentStep--;
  }
}
