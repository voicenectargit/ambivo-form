import {
  Component,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  Inject,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

import { config } from './config';
import { WidgetInterface } from './widget.interface';
import { WidgetService } from './widget.service';
import {
  FormlyConfig,
  FORMLY_CONFIG,
  FormlyModule,
  ConfigOption,
} from '@ngx-formly/core';

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
  isSuccess: boolean;
  errorMessage: string;
  @Input() id: string;
  @Input() token: string;
  @Input() debug: WidgetInterface;
  @Input() width = '100%';

  constructor(
    private widgetService: WidgetService,
    @Inject(FormlyConfig) formlyConfig: FormlyConfig,
    @Inject(FORMLY_CONFIG) formlyConfigOptions: ConfigOption[]
  ) {
    formlyConfigOptions.forEach((o) => formlyConfig.addConfig(o));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.widget$ = this.widgetService.widget$;
    if (changes.debug) {
      this.widgetService.setWidget(this.debug);
    } else if (changes.id) {
      this.widgetService.getWidget(this.id, this.token);
    }
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
