import { Injectable } from '@angular/core';
import { GtagInterface } from './gtag.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GtagService {
  gtag: GtagInterface;

  constructor() {
    if ('gtag' in window) {
      this.gtag = window['gtag'];
    }
  }

  set(params: any): void {
    return this.gtag('set', params);
  }

  event(action: string, params?: any): Observable<void> {
    return new Observable((observer) => {
      try {
        const tmr = setTimeout(() => {
          observer.next();
        }, 10000);

        this.gtag('event', action, {
          ...params,
          event_callback: () => {
            clearTimeout(tmr);
            observer.next();
          },
        });
      } catch (e) {
        observer.next();
      }
    });
  }

  conversion(id: string, label: string): Observable<void> {
    return this.event('conversion', { send_to: `${id}/${label}` });
  }
}
