import { Component, OnInit } from '@angular/core';

declare var $:any;
// services
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settings:SettingsService ) { }

  ngOnInit() {
    this.putCheck( this._settings.thmSttngs.theme, this._settings.thmSttngs.contrast );
  }

  changeTheme( theme:string, contrast:string ) {
    this._settings.aplyTheme( theme, contrast );
  } 

  putCheck( theme:string, contrast:string ) {
    $(`#${theme}-check-${contrast}`).attr('checked',true)
  }

}
