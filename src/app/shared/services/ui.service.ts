import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UiService {
  private _modoIndex$ = new BehaviorSubject<number | null>(null);
  modoIndex$ = this._modoIndex$.asObservable();

  setModo(index: number) {
    this._modoIndex$.next(index);
  }
}
