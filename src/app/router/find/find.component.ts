import { Component, OnInit,HostBinding} from '@angular/core';
import {SlideEnter} from '../../animation/animate';
import {MainService} from '../../service/main.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
  host:{
    'class':'content-container'
  },
  animations:[SlideEnter]
})
export class FindComponent implements OnInit {
  _encode=(name)=>encodeURIComponent(name);
  height:number;
  imgList=[

    {img:'p-5.jpg',left:'豪华多功能餐厅',right:'位于9号楼1层',origin:5},
    {img:'p-1.jpg',left:'健身房',right:'位于2层',origin:1},
    {img:'p-2.jpg',left:'SPA',right:'位于B2层',origin:2},
    {img:'p-3.jpg',left:'丽华厅',right:'位于3层',origin:3},
    {img:'p-4.jpg',left:'景观餐厅',right:'位于2层',origin:4}
  ]
  constructor(public _main:MainService,private router:Router) {
    this.height=_main.contentHeight(55,true);
  }
  @HostBinding('@SlideEnter')slide=this._main.getRouterState('find');
  ngOnInit() {
  }
  list:any=[
    {label:'会议宴会',content:[this.imgList[0],this.imgList[2],this.imgList[1]]},
    {label:'休闲娱乐',content:[this.imgList[1],this.imgList[3],this.imgList[4]]},
    {label:'餐饮美食',content:[this.imgList[2],this.imgList[0],this.imgList[3]]},
    {label:'周边热门',content:[this.imgList[3],this.imgList[4],this.imgList[0]]}
    ]
  navTo(img){
    this._main.showImgMessage=img;
    this.router.navigate(['/main/showImg']);
  }
}
