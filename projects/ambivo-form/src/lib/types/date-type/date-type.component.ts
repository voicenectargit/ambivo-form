import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ViewEncapsulation
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import flatpickr from 'flatpickr';

@Component({
  selector: 'date-type',
  templateUrl: './date-type.component.html',
  styleUrls: ['./date-type.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DateTypeComponent extends FieldType implements AfterViewInit {
  private instance: flatpickr.Instance;
  @ViewChild('element') elementRef: ElementRef;

  ngAfterViewInit(): void {
    const options = {
      minDate: this.to.minDate,
      maxDate: this.to.maxDate,
      enableTime: this.to.enableTime
    };
    this.instance = flatpickr(this.elementRef.nativeElement, options);
  }
}
