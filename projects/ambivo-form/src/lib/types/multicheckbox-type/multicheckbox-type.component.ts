import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'multicheckbox-type',
  templateUrl: './multicheckbox-type.component.html',
  styleUrls: ['./multicheckbox-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MulticheckboxTypeComponent extends FieldType {
  isSelected(value: any): void {
    const selected = this.formControl.value;
    return this.to.multiple ? selected?.includes(value) : selected === value;
  }

  select(value: any) {
    switch (this.to.multiple) {
      case true: {
        const selected = this.formControl.value || [];
        const newValue = selected.includes(value)
          ? selected.filter((v) => v !== value)
          : [...selected, value];
        this.formControl.setValue(newValue);
        break;
      }
      default: {
        const selected = this.formControl.value;
        const newValue =
          this.to.required || selected !== value ? value : undefined;
        this.formControl.setValue(newValue);
      }
    }
  }
}
