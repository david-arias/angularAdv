import { Component, OnInit } from '@angular/core';
import { SidebarService, UserService } from '../../services/service.index';

declare var $:any;
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styles: []
})
export class SideBarComponent implements OnInit {

  constructor( public _sidebar:SidebarService, public _us:UserService) {
  }
  
  ngOnInit() {
    $.sidebarMenu($('.sidebar-menu'))
  }

}
