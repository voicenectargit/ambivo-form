import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'type-host',
  template: `<formly-form
    [form]="form"
    [fields]="model"
    [model]="model"
  ></formly-form>`,
})
export class TypeHostComponent {
  model = {};
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [];
}
