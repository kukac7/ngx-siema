import { Component, Input, Output, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import Siema from 'siema';

export interface NgxSiemaOptions {
  selector?: string;
  duration?: number;
  easing?: string;
  perPage?: number;
  startIndex?: number;
  draggable?: boolean;
  threshold?: number;
  loop?: boolean;
  onInit?: Function;
  onChange?: Function;
}

@Component({
  selector: 'ngx-siema-slide',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <ng-content></ng-content>
  `,
})
export class NgxSiemaSlideComponent {
}

@Component({
  selector: 'ngx-siema',
  template: `
    <div class="{{ selector }}">
      <ng-content select="ngx-siema-slide"></ng-content>
    </div>
  `,
})
export class NgxSiemaComponent implements AfterViewInit, OnDestroy {

  @Input() options: NgxSiemaOptions;
  @Input() selector: string = 'siema';

  @Output() next = new EventEmitter<any>();
  @Output() prev = new EventEmitter<any>();
  @Output() goTo = new EventEmitter<any>();
  @Output() remove = new EventEmitter<any>();
  @Output() insert = new EventEmitter<any>();
  @Output() prepend = new EventEmitter<any>();
  @Output() append = new EventEmitter<any>();
  @Output() destroy = new EventEmitter<any>();
  @Output() currentSlide = new EventEmitter<any>();

  private instance: any;

  ngAfterViewInit() {
    if (this.options && !this.options.selector) {
      this.options = Object.assign({}, this.options, { selector: `.${this.selector}` });
    }

    this.instance = new Siema(this.options);
  }

  ngOnDestroy() {
    if (this.instance) {
      setTimeout(() => {
        this.instance.destroy();
        this.instance = null;
      });
    }
  }

  onNext(numbers: number = 1) {
    this.instance.next(numbers, this.next.emit({
      currentSlide: this.instance.currentSlide,
    }));
  }

  onPrev(numbers: number = 1) {
    this.instance.prev(numbers, this.next.emit({
      currentSlide: this.instance.currentSlide,
    }));
  }

  onGoTo(index: number) {
    this.instance.goTo(index, this.goTo.emit({
      currentSlide: this.instance.currentSlide,
    }));
  }

  onRemove(index: number) {
    this.instance.remove(index, this.remove.emit({
      currentSlide: this.instance.currentSlide,
    }));
  }

  onInsert(item: any, index: number) {
    this.instance.insert(item, index, this.insert.emit({
      currentSlide: this.instance.currentSlide,
    }));
  }

  onPrepend(item: any) {
    this.instance.prepend(item, this.prepend.emit({
      currentSlide: this.instance.currentSlide,
    }));
  }

  onAppend(item: any) {
    this.instance.append(item, this.append.emit({
      currentSlide: this.instance.currentSlide,
    }));
  }

  onDestroy(restoreMarkup: boolean = false) {
    this.instance.destroy(restoreMarkup, this.destroy.emit({
      currentSlide: this.instance.currentSlide,
    }));
  }

  onCurrentSlide() {
    this.currentSlide.emit({
      currentSlide: this.instance.currentSlide,
    });
  }
}
