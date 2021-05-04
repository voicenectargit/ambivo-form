import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'textarea-type',
  templateUrl: './textarea-type.component.html',
  styleUrls: ['./textarea-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaTypeComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      cols: 1,
      rows: 1,
    },
  };
}
