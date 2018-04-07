import { Component, OnInit,HostBinding } from '@angular/core';
import {SlideEnter} from '../../animation/animate';
import {MainService} from '../../service/main.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css'],
  animations:[SlideEnter],
  host:{
    class:'content-container'
  }
})
export class MyComponent implements OnInit {
  @HostBinding('@SlideEnter')slide=this._main.getRouterState('my');
  contentHeight:number;
  constructor(public _main:MainService) { }
  imgAddress='/assets/avatar.jpg';
  ngOnInit() {
    this.contentHeight=this._main.contentHeight(55,true);
  }

}
