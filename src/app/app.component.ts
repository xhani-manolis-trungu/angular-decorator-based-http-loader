import { Component } from '@angular/core';

import { BackendService } from './backend.service';
import { LoaderEnabled } from './loader/loader.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = [];

  constructor(private backendSvc: BackendService) {}

  public loadData() {
    this.data = [];
    this.backendSvc.getHeroes().subscribe((response) => {
      this.data = response;
      console.log('res', response);
    });
  }
}
