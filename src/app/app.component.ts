import { Component, HostListener } from '@angular/core';

// services
import { SettingsService } from './services/service.index';

declare var $:any;
declare var Waves:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adminPro';

  constructor( public _settings:SettingsService ) {
    // INIT WAVES EFFECT
    Waves.init();
  }

}
