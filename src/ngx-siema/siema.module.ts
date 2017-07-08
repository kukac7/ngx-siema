import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSiemaComponent, NgxSiemaSlideComponent } from './siema.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgxSiemaComponent,
    NgxSiemaSlideComponent,
  ],
  exports: [
    NgxSiemaComponent,
    NgxSiemaSlideComponent,
  ],
})
export class NgxSiemaModule {
}
