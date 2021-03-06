import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'svg-icon',
  template:
    '<span class="material-icons-outlined"><ng-content></ng-content></span>',
  styleUrls: ['./svg-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent {
  @Input() icon: string;
}
