import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { LoaderEnabled } from './loader/loader.service'

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
   @LoaderEnabled()
  public getHeroes (): Observable<Object[]> {
    return this.http.get<Object[]>('api/heroes');
  }

}