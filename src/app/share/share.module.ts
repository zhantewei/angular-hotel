import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ImgComponent } from '../component/img/img.component';
import { ListImgComponent } from '../component/list-img/list-img.component';
import { RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,

} from '@angular/material';
import { ResizeDirective } from './directive/resize.directive';
import { CarouselComponent } from './component/carousel/carousel.component';

import { CarouselItemComponent } from './component/carousel-item/carousel-item.component';
import { TitleComponent } from './component/title/title.component';


@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule
  ],
  declarations: [
    ImgComponent,
    ListImgComponent,
    ResizeDirective,
    CarouselComponent,
    CarouselItemComponent,
    TitleComponent
  ],
  exports:[
      MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    TitleComponent,
    CommonModule,
    ImgComponent,
    ListImgComponent,
    ResizeDirective,
    CarouselComponent,
    CarouselItemComponent
    ]
})
export class ShareModule { }
