import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { WidgetInterface } from './widget.interface';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  apiUrl = 'https://goferapi.ambivo.com';
  constructor(private http: HttpClient) {}

  getWidget(id: string, token: string): Observable<WidgetInterface> {
    const origin = window?.location?.href;
    const params = { widget_id: id, token, origin_url: origin };

    return this.http
      .get<any>(`${this.apiUrl}/public/widget`, { params })
      .pipe(
        tap((response) => {
          if (!response?.widget_list?.length) {
            throw new Error('Widget not found');
          }
        }),
        map((response) => response.widget_list[0])
      );
  }

  executeWidget(id: string, token: string, payload: any): Observable<any> {
    const origin = window?.location?.href;
    const body = { widget_id: id, token, payload, origin_url: origin };

    return this.http.post<any>(`${this.apiUrl}/public/widget`, body).pipe(
      tap((response) => {
        if (response.result !== 1) {
          throw new Error(response.error);
        }
      })
    );
  }
}
