import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import flatpickr from 'flatpickr';

@Component({
  selector: 'date-type',
  templateUrl: './date-type.component.html',
  styleUrls: ['./date-type.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DateTypeComponent extends FieldType implements AfterViewInit {
  private instance: flatpickr.Instance;
  options: any;
  @ViewChild('element') elementRef: ElementRef;

  ngAfterViewInit(): void {
    this.options = {
      minDate: this.to.minDate,
      maxDate: this.to.maxDate,
      enabmeTime: this.to.enableTime,
      position: 'auto right',
    };

    this.instance = flatpickr(this.elementRef.nativeElement, this.options);
  }
}
