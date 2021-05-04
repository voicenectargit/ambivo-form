import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { StepperTypeComponent } from './stepper-type.component';
import { FormlyModule } from '@ngx-formly/core';
import { TypeHostModule } from '../test/type-host.module';
import { TypeHostComponent } from '../test/type-host.component';
import { By } from '@angular/platform-browser';

describe('StepperTypeComponent', () => {
  let host: TypeHostComponent;
  let component: StepperTypeComponent;
  let fixture: ComponentFixture<TypeHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepperTypeComponent],
      imports: [
        TypeHostModule,
        FormlyBootstrapModule,
        FormlyModule.forRoot({
          types: [{ name: 'stepper', component: StepperTypeComponent }],
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeHostComponent);
    host = fixture.componentInstance;
  });

  it('should create', () => {
    host.fields = [
      {
        type: 'stepper',
        fieldGroup: [
          {
            templateOptions: {
              label: 'First step',
              description: 'Hello world',
            },
            fieldGroup: [
              {
                key: 'input',
                templateOptions: {},
              },
            ],
          },
        ],
      },
    ];
    fixture.detectChanges();
    component = fixture.debugElement.query(By.directive(StepperTypeComponent))
      .componentInstance;
    expect(component).toBeTruthy();
  });
});
