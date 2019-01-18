import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  w:any;

  constructor() {

    // INIT Window Width
    this.w = window.innerWidth;
    if ( this.w <= 1280 ) {
      $("body").addClass( "menuSmall" );
    } else {
      $("body").removeClass( "menuSmall" );
    }

  }

  ngOnInit() {
  }

  onResize(event) {
    this.w = window.innerWidth;
    if ( this.w <= 1280 ) {
      $("body").addClass( "menuSmall" );
    } else {
      $("body").removeClass( "menuSmall" );
    }
  }

}
