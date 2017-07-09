import { Component } from '@angular/core';
import { NgxSiemaOptions, NgxSiemaService } from 'ngx-siema';

@Component({
  selector: 'ngx-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {

  options: NgxSiemaOptions = {
    selector: '.siema',
  };

  options2: NgxSiemaOptions = {
    selector: '.siema2',
  };

  slides: number[] = [1, 2, 3, 4, 5];

  constructor(private ngxSiemaService: NgxSiemaService) {
  }

  next() {
    this.ngxSiemaService.next(1)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  prev() {
    this.ngxSiemaService.prev(1, '.siema')
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
