import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import Siema from 'siema';

@Component({
  selector: 'gallery-type',
  templateUrl: './gallery-type.component.html',
  styleUrls: ['./gallery-type.component.scss'],
})
export class GalleryTypeComponent extends FieldType implements AfterViewInit {
  siema: Siema;
  @ViewChild('gallery') element: ElementRef;

  ngAfterViewInit(): void {
    const options = {
      selector: this.element.nativeElement,
      perPage: { 768: this.to.perPage || 1 },
      loop: this.to.loop || false,
    };

    this.siema = new Siema(options);

    if (this.to.auto) {
      setInterval(() => this.siema.next(), +this.to.interval * 1000);
    }
  }
}
