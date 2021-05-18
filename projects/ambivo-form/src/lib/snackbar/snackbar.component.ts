import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { repeatWhen, takeUntil } from 'rxjs/operators';

import { SnackbarOptionsInterface } from './snackbar-options.interface';

@Component({
  selector: 'snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit, AfterViewInit {
  @Input() text: string;
  @Input() options: SnackbarOptionsInterface;
  @Output() destroy = new EventEmitter<boolean>();
  @ViewChild('element') elementRef: ElementRef;

  ngOnInit(): void {
    // Default options
    const defaults: SnackbarOptionsInterface = {
      type: 'info',
      timeout: 6000,
    };

    this.options = { ...defaults, ...(this.options || {}) };
  }

  ngAfterViewInit(): void {
    // Destroy automatically
    const off$ = fromEvent(this.elementRef.nativeElement, 'mouseenter');
    const on$ = fromEvent(this.elementRef.nativeElement, 'mouseleave');
    interval(this.options.timeout)
      .pipe(
        takeUntil(off$),
        repeatWhen(() => on$)
      )
      .subscribe(() => this.close());
  }

  close(): void {
    this.destroy.emit(true);
  }
}
