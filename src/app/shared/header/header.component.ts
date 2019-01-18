import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  avatarMenu:boolean = false;
  mssgMenu:boolean = false;
  notiMenu:boolean = false;
  searchMenu:boolean = false;

  

  constructor() { }

  ngOnInit() {
  }

  menuTrgr() {
    $("body").toggleClass( "menuSmall" );
  }

}
