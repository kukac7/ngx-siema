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
  onInit?: () => void;
  onChange?: () => void;
}

@Component({
  selector: 'ngx-siema-slide',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
})
export class NgxSiemaSlideComponent {
}

@Component({
  selector: 'ngx-siema',
  template: `
    <div class="{{ ngxClass }}">
        <ng-content select="ngx-siema-slide"></ng-content>
    </div>
  `,
})
export class NgxSiemaComponent implements AfterViewInit, OnDestroy {
  @Input() options: NgxSiemaOptions;
  @Input() ngxClass: string = 'siema';

  @Output() next = new EventEmitter<any>();
  @Output() prev = new EventEmitter<any>();
  @Output() goTo = new EventEmitter<any>();

  private instance: any;

  ngAfterViewInit() {
    this.options.selector = `.${this.ngxClass}`;
    this.instance = new Siema(this.options);
  }

  ngOnDestroy() {
    if (this.instance) {
      setTimeout(() => {
        this.instance.removeAllListeners();
        this.instance.destroy();
        this.instance = null;
      });
    }
  }

  onNext(numbers: number = 1) {
    this.instance.next(numbers);
    this.next.emit({
      currentSlide: this.instance.currentSlide,
    });
  }

  onPrev(numbers: number = 1) {
    this.instance.prev(numbers);
    this.next.emit({
      currentSlide: this.instance.currentSlide,
    });
  }

  onGoTo(index: number) {
    this.instance.goTo(index);
    this.goTo.emit({
      currentSlide: this.instance.currentSlide,
    });
  }
}
