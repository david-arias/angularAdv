import { Component, HostListener } from '@angular/core';

declare var $:any;
declare var Waves:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adminPro';

  constructor() {
    // INIT WAVES EFFECT
    Waves.init();
  }

}
