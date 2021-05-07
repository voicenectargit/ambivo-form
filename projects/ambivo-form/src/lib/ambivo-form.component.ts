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
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { config } from './config';
import { SnackbarService } from './snackbar/snackbar.service';
import { WidgetInterface } from './widget.interface';
import { WidgetService } from './widget.service';

const providers = FormlyModule.forRoot(config).providers;
@Component({
  selector: 'ambivo-form',
  templateUrl: './ambivo-form.component.html',
  styleUrls: ['./ambivo-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
  @Input() width = '100%';

  constructor(
    private widgetService: WidgetService,
    private snackarService: SnackbarService,
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
  }

  submit(widget: WidgetInterface): void {
    this.isLoading = true;

    this.widgetService
      .executeWidget(widget.id, this.token, this.model)
      .pipe(take(1))
      .subscribe(() => this.onSuccess(widget))
      .add(() => (this.isLoading = false));
  }

  onSuccess(widget: WidgetInterface): void {
    this.form.reset();
    if (widget.body.redirect_url) {
      window.location.replace(widget.body.redirect_url);
    } else {
      this.snackarService.show(widget.body?.message, {
        title: 'Submitted!',
        type: 'success',
      });
    }
  }
}
