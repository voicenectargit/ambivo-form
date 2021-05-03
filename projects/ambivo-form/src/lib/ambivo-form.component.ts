import {
  Component,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

import { WidgetInterface } from './widget.interface';
import { WidgetService } from './widget.service';

@Component({
  selector: 'ambivo-form',
  templateUrl: './ambivo-form.component.html',
  styleUrls: ['./ambivo-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AmbivoFormComponent implements OnChanges {
  model = {};
  form = new FormGroup({});
  widget$: Observable<WidgetInterface>;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
  @Input() id: string;
  @Input() token: string;
  @Input() debug: WidgetInterface;
  @Input() width = '100%';
  constructor(private widgetService: WidgetService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.widget$ = changes.debug
      ? of(this.debug ? JSON.parse(JSON.stringify(this.debug)) : undefined)
      : this.widgetService.getWidget(this.id, this.token);
  }

  submit(widget: WidgetInterface): void {
    this.isSuccess = false;
    this.isLoading = true;
    this.errorMessage = undefined;

    this.widgetService
      .executeWidget(widget.id, this.token, this.model)
      .pipe(take(1))
      .subscribe(
        () => this.onSuccess(widget),
        (error) => (this.errorMessage = error)
      )
      .add(() => (this.isLoading = false));
  }

  onSuccess(widget: WidgetInterface): void {
    this.isSuccess = true;
    this.form.reset();
    if (widget.body.redirect_url) {
      window.location.replace(widget.body.redirect_url);
    }
  }
}
