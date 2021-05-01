import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import {
  AmbivoFormModule,
  AmbivoFormComponent,
} from '../../../ambivo-form/src/public-api';

@NgModule({
  imports: [BrowserModule, AmbivoFormModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const element = createCustomElement(AmbivoFormComponent, {
      injector: this.injector,
    });
    customElements.define('ambivo-form', element);
  }
}
