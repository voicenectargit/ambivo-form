import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';

import { TypeHostComponent } from './type-host.component';

@NgModule({
  declarations: [TypeHostComponent],
  exports: [TypeHostComponent],
  imports: [FormlyModule.forRoot()],
})
export class TypeHostModule {}
