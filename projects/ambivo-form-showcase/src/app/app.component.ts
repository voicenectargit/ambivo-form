import { Component } from '@angular/core';
import { WidgetInterface } from 'projects/ambivo-form/src/lib/widget.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
                description: 'Hello world'
              },
              fieldGroup: [
                {
                  key: 'buttons',
                  type: 'buttons',
                  templateOptions: {
                    label: 'Buttons',
                    options: [
                      { label: 'Foasdd', value: '1' },
                      { label: 'Barasddj', value: '2' },
                      { label: 'Qwe asdd', value: '3' },
                      { label: 'Fooasd', value: '4' },
                      { label: 'Barasdasd asd sdsds', value: '5' },
                      { label: 'Qwe asdsdsdd', value: '6' }
                    ],
                    multiple: true,
                    required: true
                  }
                },

                {
                  key: 'number',
                  type: 'number',
                  className: 'am-col-50',
                  templateOptions: {
                    label: 'Number'
                  }
                },
                {
                  key: 'money',
                  type: 'money',
                  className: 'am-col-50',
                  templateOptions: {
                    label: 'Amount'
                  }
                },
                {
                  key: 'date',
                  type: 'date',
                  templateOptions: {
                    label: 'Date'
                  }
                },
                {
                  key: 'input',
                  type: 'input',
                  templateOptions: {
                    label: 'Input'
                  }
                },
                {
                  key: 'textarea',
                  type: 'textarea',
                  templateOptions: {
                    label: 'Message',
                    rows: 5
                  }
                },
                {
                  key: 'email',
                  type: 'email',
                  templateOptions: {
                    label: 'E-Mail'
                  }
                }
              ]
            },
            {
              templateOptions: { label: 'Second step' },
              fieldGroup: [
                {
                  key: 'phone',
                  type: 'phone',
                  templateOptions: {
                    label: 'Phone'
                  }
                },
                {
                  key: 'url',
                  type: 'url',
                  templateOptions: {
                    label: 'URL'
                  }
                },
                {
                  key: 'checkbox',
                  type: 'checkbox',
                  templateOptions: {
                    label: 'Checkbox'
                  }
                }
              ]
            },
            {
              templateOptions: { label: 'Third step' },
              fieldGroup: [
                {
                  key: 'radio',
                  type: 'radio',
                  templateOptions: {
                    label: 'Radio',
                    formCheck: 'stacked',
                    options: [
                      { label: 'Foasdd', value: '1' },
                      { label: 'Barasddj', value: '2' },
                      { label: 'Qwe asdd', value: '3' },
                      { label: 'Fooasd', value: '4' },
                      { label: 'Barasdasd asd sdsds', value: '5' },
                      { label: 'Qwe asdsdsdd', value: '6' }
                    ]
                  }
                },
                {
                  key: 'select',
                  type: 'select',
                  templateOptions: {
                    label: 'Select',
                    formCheck: 'inline',
                    options: ['foo', 'bar']
                  }
                }
              ]
            }
          ]
        }
      ],
      styling: {
        '--font-family': "'Roboto', sans-serif"
      },
      logo:
        'data:image/png;base64,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'
    }
  };
}
