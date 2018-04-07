import { Component, OnInit,HostBinding} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MainService} from 'app/service/main.service';
import {SlideDown,RouterToggle} from 'app/animation/animate';
import {imgCollection} from 'config/data';

@Component({
  selector: 'app-img-show',
  templateUrl: './img-show.component.html',
  styleUrls: ['./img-show.component.css'],
  animations:[RouterToggle],
  host:{
    class:'my-page'
  }
})
export class ImgShowComponent implements OnInit {
  @HostBinding('@RouterToggle')toggle;
  constructor(
    public _main:MainService,
    private route:ActivatedRoute
    ) { }
  imgList:Array<string>;
  title:string;
  pos:string;
  contentHeight:number;
  ngOnInit() {
    this.contentHeight=this._main.contentHeight(0,true);
    let {origin,left,right}=this._main.showImgMessage;

    if(origin!==undefined)this.imgList=imgCollection[origin];
    this.title=left;
    this.pos=right;

  }

}
