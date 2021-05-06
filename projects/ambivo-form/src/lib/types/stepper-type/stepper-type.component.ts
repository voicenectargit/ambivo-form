import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';

import { WidgetService } from '../../widget.service';
import { WidgetInterface } from '../../widget.interface';

@Component({
  selector: 'stepper-type',
  templateUrl: './stepper-type.component.html',
  styleUrls: ['./stepper-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperTypeComponent extends FieldType {
  widget$: Observable<WidgetInterface>;
  currentStep = 0;

  get length(): number {
    return this.field.fieldGroup?.length;
  }

  constructor(private widgetService: WidgetService) {
    super();
    this.widget$ = this.widgetService.widget$;
  }

  isValid(field: FormlyFieldConfig): boolean {
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
