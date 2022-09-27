import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { LoaderService } from './app/loader/loader.service'

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));



export function LoaderEnabled(): MethodDecorator {

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function () {
     // LoaderService.showLoader();
      console.log('******Decorator call -LOADERON', propertyKey,original);
      return original.apply(this, arguments)
        .finally(() => {
          console.log('******Decorator call done--LOADEROFF', propertyKey);
        //  LoaderService.hideLoader();
        });
    };
    return descriptor;
  };

}