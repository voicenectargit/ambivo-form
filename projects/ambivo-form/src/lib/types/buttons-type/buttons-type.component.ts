import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'buttons-type',
  templateUrl: './buttons-type.component.html',
  styleUrls: ['./buttons-type.component.scss']
})
export class ButtonsTypeComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      buttonClass: 'col-33'
    }
  };
  isSelected(value: any): void {
    const selected = this.formControl.value;
    return this.to.multiple ? selected?.includes(value) : selected === value;
  }

  select(value: any): void {
    switch (this.to.multiple) {
      case true: {
        const selected = this.formControl.value || [];
        const newValue = selected.includes(value)
          ? selected.filter(v => v !== value)
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
