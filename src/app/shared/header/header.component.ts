import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/service.index';

import { User } from '../../models/user.model';

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

  user: User;

  constructor( public _us:UserService ) { }

  ngOnInit() {
    this.user = this._us.usuario;    
  }

  menuTrgr() {
    $("body").toggleClass( "menuSmall" );
  }

}
