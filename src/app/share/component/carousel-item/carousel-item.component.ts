import { Component, OnInit,HostBinding } from '@angular/core';
import {Carousel} from 'app/animation/animate';
@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css'],
  host:{
    class:'carousel-item'
  },
  animations:[Carousel]
})
export class CarouselItemComponent implements OnInit {
  @HostBinding('@Carousel')itemPos:any='';
  constructor() { }
  ngOnInit() {
  }

}
