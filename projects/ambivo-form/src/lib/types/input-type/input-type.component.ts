import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'lib-input-type',
  templateUrl: './input-type.component.html',
  styleUrls: ['./input-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTypeComponent extends FieldType {}
