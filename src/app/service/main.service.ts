import { Injectable } from '@angular/core';

@Injectable()
export class MainService {
  list=['home','find','my'];
  activePage='home';
  screenWidth=document.querySelector('body').offsetWidth;
  todayStr:string;
  tomorrowStr:string;
  headerHeight:number=50;
  showImgMessage:any={};
  bedMessage:any={
    area: 20,
    bed: "大床",
    img: "1.jpg",
    level: "2-8层",
    pages: 1,
    people: "最多入住1人",
    price: 188,
    title: "大房"
  };
  constructor(){
    const today=new Date();
    const tomorrow=new Date();
    const genDateStr=date=>`${date.getMonth()+1}月${date.getDate()}日`;
    tomorrow.setDate(tomorrow.getDate()+1);
    this.todayStr=genDateStr(today);
    this.tomorrowStr=genDateStr(tomorrow);
  }
  getRouterState=(pageName)=>{
    const preIndex=this.list.indexOf(this.activePage);
    const nowIndex=this.list.indexOf(pageName);
    const state=preIndex==nowIndex?'active':(preIndex>nowIndex?'right':'left');
    this.activePage=pageName;
    return state;
  }

  contentHeight=(footerHeight,hasHeader?)=>{
    const fullHeight=document.documentElement.clientHeight;
    return fullHeight-footerHeight-(hasHeader?this.headerHeight:0);
  }
}
