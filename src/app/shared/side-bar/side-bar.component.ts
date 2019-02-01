import { Component, OnInit } from '@angular/core';
import { SidebarService, UserService } from '../../services/service.index';
import { User } from '../../models/user.model';

declare var $:any;
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styles: []
})
export class SideBarComponent implements OnInit {
  
  user: User;

  constructor( public _sidebar:SidebarService, public _us:UserService) {
    this.user = this._us.usuario;    
  }
  
  ngOnInit() {
    $.sidebarMenu($('.sidebar-menu'))

    this._sidebar.loadMenu();
  }

}
