
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

// shared components
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

// plugins module
import { PluginsModule } from '../plugins.module';

// pipes
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
     declarations: [
          HeaderComponent,
          SideBarComponent,
          BreadcrumbsComponent,
     ],
     imports: [
          RouterModule,
          PluginsModule,

          PipesModule
     ],
     exports: [
          HeaderComponent,
          SideBarComponent,
          BreadcrumbsComponent,
     ],
     providers: [],
})
export class SharedModule {}