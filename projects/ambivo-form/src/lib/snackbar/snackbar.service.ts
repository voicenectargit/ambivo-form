import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  ComponentRef,
} from '@angular/core';
import { SnackbarComponent } from './snackbar.component';
import { take } from 'rxjs/operators';
import { SnackbarOptionsInterface } from './snackbar-options.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  show(text: string, options?: SnackbarOptionsInterface): Observable<any> {
    // 1. Create a component reference from the component
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(SnackbarComponent)
      .create(this.injector);

    componentRef.instance.text = text;
    componentRef.instance.options = options;

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);

    // 5. Destroy component
    const destroy$ = componentRef.instance.destroy;
    destroy$.pipe(take(1)).subscribe(() => this.destroy(componentRef));
    return destroy$;
  }

  destroy(componentRef: ComponentRef<SnackbarComponent>): void {
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}
