import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/publish';

const next$ = new ReplaySubject(1);
const prev$ = new ReplaySubject(1);
const goTo$ = new ReplaySubject(1);
const remove$ = new ReplaySubject(1);
const insert$ = new ReplaySubject(1);
const prepend$ = new ReplaySubject(1);
const append$ = new ReplaySubject(1);
const destroy$ = new ReplaySubject(1);
const currentSlide$ = new ReplaySubject(1);

@Injectable()
export class NgxSiemaService {

  next(numbers: number = 1, selector?: string): Observable<{ selector: string, currentSlide: number }> {
    const listener = new BehaviorSubject<{ selector: string, currentSlide: number }>(null);
    next$.next({ selector, numbers, listener });
    return listener.asObservable();
  }

  prev(numbers: number = 1, selector?: string): Observable<{ selector: string, currentSlide: number }> {
    const listener = new BehaviorSubject<{ selector: string, currentSlide: number }>(null);
    prev$.next({ selector, numbers, listener });
    return listener.asObservable();
  }

  goTo(index: number, selector?: string): Observable<{ selector: string, currentSlide: number }> {
    const listener = new BehaviorSubject<{ selector: string, currentSlide: number }>(null);
    goTo$.next({ selector, index, listener });
    return listener.asObservable();
  }

  remove(index: number, selector?: string): Observable<{ selector: string, currentSlide: number }> {
    const listener = new BehaviorSubject<{ selector: string, currentSlide: number }>(null);
    remove$.next({ selector, index, listener });
    return listener.asObservable();
  }

  insert(item: any, index: number, selector?: string): Observable<{ selector: string, currentSlide: number }> {
    const listener = new BehaviorSubject<{ selector: string, currentSlide: number }>(null);
    insert$.next({ selector, item, index, listener });
    return listener.asObservable();
  }

  prepend(item: any, selector?: string): Observable<{ selector: string, currentSlide: number }> {
    const listener = new BehaviorSubject<{ selector: string, currentSlide: number }>(null);
    prepend$.next({ selector, item, listener });
    return listener.asObservable();
  }

  append(item: any, selector?: string): Observable<{ selector: string, currentSlide: number }> {
    const listener = new BehaviorSubject<{ selector: string, currentSlide: number }>(null);
    append$.next({ selector, item, listener });
    return listener.asObservable();
  }

  destroy(restoreMarkup: boolean = false, selector?: string): Observable<{ selector: string }> {
    const listener = new BehaviorSubject<{ selector: string }>(null);
    destroy$.next({ selector, listener });
    return listener.asObservable();
  }

  currentSlide(selector?: string): Observable<{ selector: string, currentSlide: number }> {
    const listener = new BehaviorSubject<{ selector: string, currentSlide: number }>(null);
    currentSlide$.next({ selector, listener });
    return listener.asObservable();
  }

  onNext(): Observable<{ selector: string, numbers: number }> {
    return next$.publish().refCount();
  }

  onPrev(): Observable<{ selector: string, numbers: number }> {
    return prev$.publish().refCount();
  }

  onGoTo(): Observable<{ selector: string, index: number }> {
    return goTo$.publish().refCount();
  }

  onRemove(): Observable<{ selector: string, index: number }> {
    return remove$.publish().refCount();
  }

  onInsert(): Observable<{ selector: string, item: any, index: number }> {
    return insert$.publish().refCount();
  }

  onPrepend(): Observable<{ selector: string, item: any }> {
    return prepend$.publish().refCount();
  }

  onAppend(): Observable<{ selector: string, item: any }> {
    return append$.publish().refCount();
  }

  onDestroy(): Observable<{ selector: string }> {
    return destroy$.publish().refCount();
  }

  onCurrentSlide(): Observable<{ selector: string }> {
    return currentSlide$.publish().refCount();
  }
}
