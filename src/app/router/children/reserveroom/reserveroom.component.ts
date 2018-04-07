import { Component, OnInit,HostBinding } from '@angular/core';

import {MainService} from 'app/service/main.service';
import {SlideDown,RouterToggle} from 'app/animation/animate';
@Component({
  selector: 'app-reserveroom',
  templateUrl: './reserveroom.component.html',
  styleUrls: ['./reserveroom.component.css'],
  animations:[RouterToggle,SlideDown],
  host:{
    class:'my-page'
  }
})
export class ReserveroomComponent implements OnInit {
  @HostBinding('@RouterToggle')routerToggle:any;
  footerHeight:number=70;
  contentHeight:number;
  roomNum:number=1;
  liveNum:number=1;
  constructor(public _main:MainService) {
    this.contentHeight=_main.contentHeight(this.footerHeight,true);

  }
  isSelectRoomNum:boolean=false;
  rooms=new Array(5);
  selectTime:any;
  selectRoom=(index)=>{
    this.roomNum=index;
    if(this.selectTime)clearTimeout(this.selectTime);
    this.selectTime=setTimeout(()=>this.selectTime=this.isSelectRoomNum=false,200);
  }
  ngOnInit() {
  }

}
