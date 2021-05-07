import { Component, Input } from '@angular/core';

@Component({
  selector: 'font-loader',
  templateUrl: './font-loader.component.html',
})
export class FontLoaderComponent {
  @Input() font: string;
}
