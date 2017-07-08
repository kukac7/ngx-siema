[![Build Status](https://travis-ci.org/lexzhukov/ngx-siema.svg?branch=master)](https://travis-ci.org/lexzhukov/ngx-siema)

# ngx-siema

Lightweight and simple carousel with no dependencies.

## Installation

`npm i ngx-siema`

## Sample

Include NgxSiemaModule in your main module:

```javascript
import { NgxSiemaModule} from 'ngx-siema';

@NgModule({
  // ...
  imports:      [
    NgxSiemaModule
  ],
  // ...
})
export class AppModule { }
```

Then use in your component:

```javascript
import { Component, OnInit } from '@angular/core';
import { NgxSiemaOptions } from 'ngx-siema';

@Component({
  selector: 'sample',
  template: `
    <ngx-siema ngxClass="my-siema"
        [options]="options"
        (prev)="prev($event)"
        (next)="next($event)"
        (goTo)="goTo($event)">
      <ngx-siema-slide>
        <img src="assets/siema--pink.svg">
      </ngx-siema-slide>
      <ngx-siema-slide>
        <img src="assets/siema--yellow.svg">
      </ngx-siema-slide>
      <ngx-siema-slide>
        <img src="assets/siema--pink.svg">
      </ngx-siema-slide>
    </ngx-siema>
  `,
})
export class Sample implements OnInit {

  options: NgxSiemaOptions;

  ngOnInit() {
    this.options = {
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        threshold: 20,
        loop: false,
        onInit: () => {
            // runs immediately after first initialization
        },
        onChange: () => {
            // runs after slide change
        }
    };
  }

}
```

Example of usage with the navigation buttons:

```javascript
import { Component, ViewChild } from '@angular/core';
import { NgxSiemaComponent } from 'ngx-siema';

@Component({
  selector: 'sample',
  template: `
    <ngx-siema>
      <ngx-siema-slide>
        <img src="assets/siema--pink.svg">
      </ngx-siema-slide>
      <ngx-siema-slide>
        <img src="assets/siema--yellow.svg">
      </ngx-siema-slide>
      <ngx-siema-slide>
        <img src="assets/siema--pink.svg">
      </ngx-siema-slide>
    </ngx-siema>
    <button (click)="onPrev(1)">Prev</button>
    <button (click)="onNext(1)">Next</button>
    <button (click)="onGoTo(2)">GoTo</button>
  `,
})
export class Sample {

  @ViewChild(NgxSiemaComponent) siema;

  onPrev(numbers: number) {
      this.siema.onPrev(numbers);
  }

  onNext(numbers: number) {
      this.siema.onNext(numbers);
  }

  onGoTo(slide: number) {
      this.siema.onGoTo(slide);
  }

}
```

## License
[MIT](LICENSE) license.
