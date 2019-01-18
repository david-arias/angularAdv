
import { NgModule } from '@angular/core';

// shared components
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

// plugins module
import { PluginsModule } from '../plugins.module';


@NgModule({
     declarations: [
          HeaderComponent,
          SideBarComponent,
          BreadcrumbsComponent,
     ],
     imports: [
          PluginsModule
     ],
     exports: [
          HeaderComponent,
          SideBarComponent,
          BreadcrumbsComponent,
     ],
     providers: [],
})
export class SharedModule {}