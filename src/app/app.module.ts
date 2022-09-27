import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component'; import { LoaderService } from './loader/loader.service';
import { BackendService } from './backend.service';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDataService } from './mock-data.service';

import { LoaderHttpInterceptor } from './http-interceptor'

@NgModule({
  imports: [BrowserModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      MockDataService, {
        delay: 3000,
        passThruUnknownUrl: true
      }
    )],
  declarations: [AppComponent, LoaderComponent],
  bootstrap: [AppComponent],
  providers: [LoaderService, BackendService , MockDataService
  // ,{ provide: HTTP_INTERCEPTORS, useClass: LoaderHttpInterceptor, multi: true}
   ]
})
export class AppModule { }
