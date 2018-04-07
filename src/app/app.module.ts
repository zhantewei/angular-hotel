import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShareModule} from './share/share.module';
import {HomeMainComponent} from './router/children/home/home.component';
import {RoutingModule} from './router/router.module'
import {MainService} from './service/main.service';


@NgModule({
  declarations: [
    HomeMainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    ShareModule
  ],
  providers: [MainService],
  bootstrap: [HomeMainComponent]
})
export class AppModule { }
