import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'checkbox-type',
  templateUrl: './checkbox-type.component.html',
  styleUrls: ['./checkbox-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxTypeComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      hideLabel: true,
    },
  };
}
