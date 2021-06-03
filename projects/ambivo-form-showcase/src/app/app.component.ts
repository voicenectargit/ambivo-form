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
          type: 'audio',
          templateOptions: {
            source:
              'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          },
        },
      ],
      theme: {
        '--font-family': "'Roboto', sans-serif",
      },
    },
  };
}
