
import { NgModule } from '@angular/core';

// main
import { PagesComponent } from './pages.component';

// pages Routes
import { PAGES_ROUTES } from './pages.routes';

// pages
import { DashboardComponent } from './dashboard/dashboard.component';

// shared module
import { SharedModule } from '../shared/shared.module';

// plugins module
import { PluginsModule } from '../plugins.module';


@NgModule({
     imports: [
          PluginsModule,
          SharedModule,

          PAGES_ROUTES,
     ],
     declarations: [
          PagesComponent,

          DashboardComponent
     ],
     exports: [
          PagesComponent,

          DashboardComponent
     ],
     providers: [],
})
export class PagesModule {}