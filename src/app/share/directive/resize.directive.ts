import { Directive,ElementRef,Input} from '@angular/core';
import {MainService} from 'app/service/main.service';
@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {
  @Input()width:number;
  @Input()set percent(val){
    if(!val)return;
    val=+val;
    const width=this.width||this._main.screenWidth;
    const height=width*val;
    this.node.style.width=width+'px';
    this.node.style.height=height+'px';
  }
  node:any;
  constructor(private _el:ElementRef,private _main:MainService ){
    this.node=_el.nativeElement;
  }

}
