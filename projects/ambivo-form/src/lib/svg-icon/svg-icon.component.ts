import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ElementRef
} from '@angular/core';
import { svgIcons } from './svg-icons';

@Component({
  selector: 'svg-icon',
  template: '',
  host: {
    role: 'img',
    'aria-hidden': 'true'
  },
  styles: [
    `
      :host {
        display: inline-block;
        fill: currentColor;
        width: 1em;
        height: 1em;
        font-size: 1em;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent {
  @Input()
  set key(name: string) {
    const icon = svgIcons[name];

    if (icon) {
      this.element.setAttribute('aria-label', `${name}-icon`);
      this.element.innerHTML = icon;
    }
  }

  constructor(private host: ElementRef) {}

  get element() {
    return this.host.nativeElement;
  }
}
