import { Component, OnInit,HostBinding} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {SlideEnter} from '../../animation/animate';
import {MainService} from 'app/service/main.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[SlideEnter],
  host:{
    class:'content-container'
  }
})
export class HomeComponent implements OnInit {
  @HostBinding('@SlideEnter')slide=this._main.getRouterState('home');
  imgList=['a-2.jpg','a-1.jpg'];
  constructor(
    public _main:MainService,
    private router:Router,
    private route:ActivatedRoute
  ){}
  contentHeight:number;
  introduction:string='本酒店为测试酒店，主要展示酒店官网通的小程序功能。可以下单测试，体验小程序的全部功能，但是无法真实入住。如有需要请联系*****';
  ngOnInit() {
    this.contentHeight=this._main.contentHeight(55,true);
  }
  selectedBadge=['咖啡厅','免费wifi','中餐厅'];
  genShopListItem=(img:string,title:string,people:number,area:number,bed:string,level:string,price:number,pages)=>{
    return {
      img:img,
      title:title,
      people:'最多入住'+people+'人',
      area:area,
      bed:bed,
      level:level+'层',
      price:price,
      pages:pages
    }
  };
  shopList=[
    this.genShopListItem('1.jpg','大房',1,20,'大床','2-8',188,1),
    this.genShopListItem('2.jpg','双人房',1,20,'大床','2-8',328,2),
    this.genShopListItem('3.jpg','家庭房',1,20,'大床','2-8',348,3),
    this.genShopListItem('4.jpg','豪华大房',1,20,'大床','2-8',528,4),
    this.genShopListItem('5.jpg','小小房',1,20,'小床','2-8',118,5)
  ];
  navTo(item){
    console.log(item);
    this.router.navigate(['../reserveRoom'],{relativeTo:this.route});
    this._main.bedMessage=item;
  }
}
