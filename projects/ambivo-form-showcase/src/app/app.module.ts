import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmbivoFormModule } from '../../../ambivo-form/src/lib/ambivo-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AmbivoFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
