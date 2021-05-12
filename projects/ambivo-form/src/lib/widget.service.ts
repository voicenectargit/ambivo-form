import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { map, tap, catchError, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { WidgetInterface } from './widget.interface';
import { SnackbarService } from './snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  apiUrl = 'https://goferapi.ambivo.com';
  private _widget = new BehaviorSubject<WidgetInterface>(undefined);
  public widget$ = this._widget.asObservable();
  constructor(
    private http: HttpClient,
    private snackarService: SnackbarService
  ) {}

  getWidget(id: string, token: string): Observable<WidgetInterface> {
    const origin = window?.location?.href;
    const params = { widget_id: id, token, origin_url: origin };

    return this.http
      .get<any>(`${this.apiUrl}/public/widget`, { params })
      .pipe(
        switchMap(response => {
          if (!response?.widget_list?.length) {
            return throwError('Widget not found');
          }
          return of(response);
        }),
        catchError(error => this._catchError(error)),
        map(response => response.widget_list[0]),
        tap(widget => this._widget.next(widget))
      );
  }

  setWidget(widget: WidgetInterface): void {
    this._widget.next(widget);
  }

  executeWidget(widget: WidgetInterface, payload: any): Observable<any> {
    const origin = window?.location?.href;
    const body = {
      widget_id: widget.id,
      token: widget.body.token,
      payload,
      origin_url: origin
    };

    return this.http.post<any>(`${this.apiUrl}/public/widget`, body).pipe(
      switchMap(response => {
        if (response.result !== 1) {
          return throwError(response.error);
        }
        return of(response);
      }),
      catchError(error => this._catchError(error))
    );
  }

  private _catchError(error: any): Observable<any> {
    const defaults = 'Something went wrong';
    const msg = typeof error === 'string' ? error : error?.message || defaults;

    this.snackarService.show(msg, { title: 'Error', type: 'error' });
    return throwError(error);
  }
}
