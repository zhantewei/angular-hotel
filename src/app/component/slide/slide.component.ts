import { Component, OnInit,HostBinding,Input} from '@angular/core';
import {MainService} from '../../service/main.service';
import {SlideEnter} from '../../animation/animate';
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  animations:[SlideEnter]
})
export class SlideComponent implements OnInit {
  @Input()set name(val:string){
    if(!val)return;
    this.SlideEnter=this._main.getRouterState(val);
  }
  @HostBinding('@SlideEnter')SlideEnter;
  constructor(public _main:MainService){}

  ngOnInit() {

  }

}
