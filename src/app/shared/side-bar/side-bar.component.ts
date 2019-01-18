import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styles: []
})
export class SideBarComponent implements OnInit {

  constructor() {
  }
  
  ngOnInit() {
    $.sidebarMenu($('.sidebar-menu'))
  }

}
