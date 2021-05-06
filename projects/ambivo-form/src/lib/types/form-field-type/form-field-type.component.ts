import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'lib-form-field',
  templateUrl: './form-field-type.component.html',
  styleUrls: ['./form-field-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldTypeComponent extends FieldWrapper {}
