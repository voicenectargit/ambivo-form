import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'radio-type',
  templateUrl: './radio-type.component.html',
  styleUrls: ['./radio-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioTypeComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };
}
