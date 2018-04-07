import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  host:{
    class:'header-title'
  }
})
export class TitleComponent implements OnInit {
  @Input()title:string;
  @Input()back:any;
  constructor() { }

  ngOnInit() {
  }

}
