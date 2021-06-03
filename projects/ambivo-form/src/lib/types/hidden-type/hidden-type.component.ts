import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'hidden-type',
  template: `<input
    type="hidden"
    [formControl]="formControl"
    [formlyAttributes]="field"
  />`,
})
export class HiddenTypeComponent extends FieldType {}
