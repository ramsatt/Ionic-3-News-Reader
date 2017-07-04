import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsdetailPage } from './newsdetail';
import { ParallaxHeader } from '../../directives/parallax-header/parallax-header';

@NgModule({
  declarations: [
    NewsdetailPage,
    ParallaxHeader
  ],
  imports: [
    IonicPageModule.forChild(NewsdetailPage),
  ],
  exports: [
    NewsdetailPage
  ]
})
export class NewsdetailPageModule {}
