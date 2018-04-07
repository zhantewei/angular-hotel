import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ShareModule} from '../share/share.module';
import { FindComponent } from './find/find.component';
import { MyComponent } from './my/my.component';
import {SlideComponent} from 'app/component/slide/slide.component';
import {AppComponent} from 'app/app.component';
import {ReserveroomComponent} from './children/reserveroom/reserveroom.component';
import { ImgShowComponent } from './children/img-show/img-show.component';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forRoot([
      {path:'main',component:AppComponent,
        children:[
          {path:'',redirectTo:'home',pathMatch:'full'},
          {path:'home',component:HomeComponent},
          {path:'find',component:FindComponent},
          {path:'my',component:MyComponent},
          {path:'reserveRoom',component:ReserveroomComponent},
          {path:'showImg',component:ImgShowComponent}
        ]
      },
      {path:'',pathMatch:'full',redirectTo:'main'}
      ]
    ),
    CommonModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    FindComponent,
    MyComponent,
    SlideComponent,
    ReserveroomComponent,
    ImgShowComponent
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
