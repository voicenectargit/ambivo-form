import {
  Component,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  Inject,
} from '@angular/core';
import {
  FormlyConfig,
  FORMLY_CONFIG,
  FormlyModule,
  ConfigOption,
} from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';

import { config } from './config';
import { SnackbarService } from './snackbar/snackbar.service';
import { WidgetInterface } from './widget.interface';
import { WidgetService } from './widget.service';
import { GtagService } from './gtag/gtag.service';

const providers = FormlyModule.forRoot(config).providers;
@Component({
  selector: 'ambivo-form',
  templateUrl: './ambivo-form.component.html',
  styleUrls: ['./ambivo-form.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [...providers],
})
export class AmbivoFormComponent implements OnChanges {
  model = {};
  form = new FormGroup({});
  widget$: Observable<WidgetInterface>;
  isLoading: boolean;
  @Input() id: string;
  @Input() token: string;
  @Input() debug: WidgetInterface;

  constructor(
    private widgetService: WidgetService,
    private snackarService: SnackbarService,
    private gtagService: GtagService,
    @Inject(FormlyConfig) formlyConfig: FormlyConfig,
    @Inject(FORMLY_CONFIG) formlyConfigOptions: ConfigOption[]
  ) {
    formlyConfigOptions.forEach((o) => formlyConfig.addConfig(o));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.widget$ = this.widgetService.widget$;
    if (changes.debug) {
      this.widgetService.setWidget(this.debug);
    } else {
      this.widget$ = this.widgetService.getWidget(this.id, this.token);
    }
    this.model = {};
    this.form.reset();
  }

  submit(widget: WidgetInterface): void {
    this.isLoading = true;

    this.widgetService
      .executeWidget(widget, this.model, this.token)
      .pipe(
        switchMap(() => {
          if (widget.body.gConversion) {
            const { gConversionId, gConversionLabel } = widget.body;
            return this.gtagService.conversion(gConversionId, gConversionLabel);
          }
          return of(true);
        }),
        take(1)
      )
      .subscribe(() => this.onSuccess(widget))
      .add(() => (this.isLoading = false));
  }

  onSuccess(widget: WidgetInterface): void {
    this.form.reset();
    if (widget.body.redirect_url) {
      window.location.replace(widget.body.redirect_url);
    } else if (widget.body.message) {
      this.snackarService.show(widget.body.message, { type: 'success' });
    }
  }
}
