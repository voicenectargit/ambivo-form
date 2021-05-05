import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmbivoFormModule } from 'ambivo-form';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AmbivoFormModule, FormlyModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
