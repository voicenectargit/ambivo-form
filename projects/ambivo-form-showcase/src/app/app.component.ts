import { Component } from '@angular/core';
import { WidgetInterface } from 'projects/ambivo-form/src/lib/widget.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  widget: WidgetInterface = {
    id: 'widget_id',
    name: 'widget_name',
    description: 'widget_description',
    type: 'form',
    body: {
      title: 'Gofer forms',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      submit: 'Submit',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
      multistep: true,
      fields: [
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
                  type: 'input',
                  templateOptions: {
                    label: 'Input',
                    required: true,
                  },
                },
                {
                  key: 'textarea',
                  type: 'textarea',
                  templateOptions: {
                    label: 'Message',
                    rows: 5,
                  },
                },
                {
                  key: 'email',
                  type: 'email',
                  templateOptions: {
                    label: 'E-Mail',
                  },
                },
              ],
            },
            {
              templateOptions: { label: 'Second step' },
              fieldGroup: [
                {
                  key: 'phone',
                  type: 'phone',
                  templateOptions: {
                    label: 'Phone',
                  },
                },
                {
                  key: 'url',
                  type: 'url',
                  templateOptions: {
                    label: 'URL',
                  },
                },
                {
                  key: 'checkbox',
                  type: 'checkbox',
                  templateOptions: {
                    label: 'Checkbox',
                  },
                },
              ],
            },
            {
              templateOptions: { label: 'Third step' },
              fieldGroup: [
                {
                  key: 'radio',
                  type: 'radio',
                  templateOptions: {
                    label: 'Radio',
                    formCheck: 'inline',
                    options: [
                      { label: 'foo', value: 'foo' },
                      { label: 'bar', value: 'bar' },
                    ],
                  },
                },
                {
                  key: 'select',
                  type: 'select',
                  templateOptions: {
                    label: 'Select',
                    formCheck: 'inline',
                    options: [
                      { label: 'foo', value: 'foo' },
                      { label: 'bar', value: 'bar' },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
      styling: {},
    },
  };
}
