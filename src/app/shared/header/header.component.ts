import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/service.index';

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

  

  constructor( public _us:UserService ) { }

  ngOnInit() {
  }

  menuTrgr() {
    $("body").toggleClass( "menuSmall" );
  }

}
