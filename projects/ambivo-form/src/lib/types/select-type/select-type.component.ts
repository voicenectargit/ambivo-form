import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'select-type',
  templateUrl: './select-type.component.html',
  styleUrls: ['./select-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectTypeComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      labelProp: 'value',
      valueProp: 'value',
      options: [],
      compareWith(o1: any, o2: any) {
        return o1 === o2;
      }
    }
  };
}
