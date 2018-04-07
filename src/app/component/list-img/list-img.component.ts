import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'list-img',
  templateUrl: './list-img.component.html',
  styleUrls: ['./list-img.component.css'],
  host:{
    class:'list-img mb-1'
  }
})
export class ListImgComponent implements OnInit {
  @Input()img:string;
  @Input()left:string;
  @Input()right:string;
  constructor() { }

  ngOnInit() {
  }

}
