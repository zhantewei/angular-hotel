import { Component } from '@angular/core';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app';
  footerList=[
    {icon:'home',path:'home',name:'首页'},
    {icon:'explore',path:'find',name:'发现'},
    {icon:'account_circle',path:'my',name:'个人中心'}
  ];
  footerHeight:number=55;
  contentHeight:number;
  constructor(){
    const fullHeight=document.documentElement.clientHeight;
    this.contentHeight=fullHeight-this.footerHeight;
  }
}
