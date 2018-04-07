import { Component, OnInit,ContentChildren,ElementRef,Input } from '@angular/core';
import {CarouselItemComponent} from '../carousel-item/carousel-item.component';
declare var Hammer:any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  host:{
    class:'carousel-container'
  }
})
export class CarouselComponent implements OnInit {
  activeIndex:number=0;
  @ContentChildren(CarouselItemComponent)CarouselItems:Array<CarouselItemComponent>;
  @Input('distance')distance:number=40;
  constructor(private _el:ElementRef) { }
  length:number;
  items:any;
  maxIndex:number;
  ngOnInit() {}
  left=()=>this.calContent('left');
  right=()=>this.calContent('right');
  debounce:any;
  calContent=(direction)=>{
    if(this.debounce)return;
    this.debounce=setTimeout(()=>this.debounce=null,400);
    const activeItem=this.items[this.activeIndex];
    //let preItem=this.activeIndex;
    if(direction=='left'){
      this.activeIndex++;
      if(this.activeIndex>this.maxIndex)this.activeIndex=0;
      activeItem['itemPos']='midLeft';
      this.items[this.activeIndex]['itemPos']='rightMid';
    }else if(direction=='right'){
      this.activeIndex--;
      if(this.activeIndex<0)this.activeIndex=this.maxIndex;
      activeItem['itemPos']='midRight';
      this.items[this.activeIndex]['itemPos']='leftMid';
    }
  };
  ngAfterContentInit(){
    const node=this._el.nativeElement;

    const hammerNode=new Hammer(node);
    let x,y;

    hammerNode.on('panend',e=>{
      let x=e.deltaX;
      if(Math.abs(x)>this.distance)x>0?this.right():this.left();
    });
    this.items=this.CarouselItems['_results'];
    this.activeIndex=this.maxIndex=(this.length=this.items.length)-1;

  }

}
