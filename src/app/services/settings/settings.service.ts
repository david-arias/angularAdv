import { Injectable } from '@angular/core';

declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  thmSttngs:ThemeSettings = {
    theme: 'light',
    contrast: 'dark'
  }

  constructor() {
    this.loadThemeSettings();
  }

  saveThemeSettings() {
    localStorage.setItem('themeSettings', JSON.stringify( this.thmSttngs ) );
  }
  loadThemeSettings() {

    if ( localStorage.getItem('themeSettings') ) {
      this.thmSttngs = JSON.parse( localStorage.getItem('themeSettings') );
    }

    this.aplyTheme( this.thmSttngs.theme, this.thmSttngs.contrast )
    
  }
  
  aplyTheme( theme:string, contrast:string ) {
        
    this.thmSttngs.theme = theme;
    this.thmSttngs.contrast = contrast;
    
    this.saveThemeSettings();
    
    // light / Dark Theme
    if ( this.thmSttngs.contrast == "light" ) {
      $("body").removeClass("darken-theme");
      $("body").addClass("lighten-theme");
    } else if ( this.thmSttngs.contrast == "dark" ) {
      $("body").removeClass("lighten-theme");
      $("body").addClass("darken-theme");
    }
  
    // color themes
    $("body").removeClass("green-theme blue-theme red-theme dark-theme light-theme");
    $("body").addClass(`${ this.thmSttngs.theme }-theme`);
    
  }



}

interface ThemeSettings {
  theme:string;
  contrast: string;
}
