
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
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
     imports: [
          PluginsModule,
          SharedModule,

          PAGES_ROUTES,
     ],
     declarations: [
          PagesComponent,

          DashboardComponent,
          AccountSettingsComponent
     ],
     exports: [
          PagesComponent,
          
          DashboardComponent,
          AccountSettingsComponent
     ],
     providers: [],
})
export class PagesModule {}