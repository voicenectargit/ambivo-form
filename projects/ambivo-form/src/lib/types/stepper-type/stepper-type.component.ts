import { Component, ChangeDetectionStrategy, Optional } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';

import { WidgetService } from '../../widget.service';
import { WidgetInterface } from '../../widget.interface';
import { AmbivoFormComponent } from '../../ambivo-form.component';

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

  constructor(
    private widgetService: WidgetService,
    @Optional() private _parent?: AmbivoFormComponent
  ) {
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

  submit(widget): void {
    this.currentStep = 0;
    this._parent?.submit(widget);
  }
}
