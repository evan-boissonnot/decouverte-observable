import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Wookie } from './wookie';

@Injectable({
  providedIn: 'root'
})
export class ObserveService {

  constructor() { }


  getAll(): Observable<Wookie[]> {
    let list = [
      <Wookie> {}
    ];

    return of(list);
  }
}
