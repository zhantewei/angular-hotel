import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css'],
  host:{
    class:'rel d-block'
  }
})
export class ImgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
