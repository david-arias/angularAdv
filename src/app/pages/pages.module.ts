
import { NgModule } from '@angular/core';

// main
import { PagesComponent } from './pages.component';

// pages Routes
import { PAGES_ROUTES } from './pages.routes';

// pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProfileComponent } from './profile/profile.component';

import { PromesaComponent } from './temporal/promesa/promesa.component';
import { RxjsComponent } from './temporal/rxjs/rxjs.component';

// shared module
import { SharedModule } from '../shared/shared.module';

// plugins module
import { PluginsModule } from '../plugins.module';

import { FormsModule } from '@angular/forms';

// pipes
import { PipesModule } from '../pipes/pipes.module';
import { UsuariosComponent } from './usuarios/usuarios.component';

// components
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { ProductorasComponent } from './productoras/productoras.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie.component';
import { SearchComponent } from './search/search.component';

@NgModule({
     imports: [
          PluginsModule,
          FormsModule,
          PipesModule,
          
          SharedModule,

          PAGES_ROUTES,
     ],
     declarations: [
          PagesComponent,

          RxjsComponent,
          PromesaComponent,

          DashboardComponent,
          AccountSettingsComponent,
          ProfileComponent,
          UsuariosComponent,
          ModalUploadComponent,
          ProductorasComponent,
          MoviesComponent,
          MovieComponent,
          SearchComponent,
     ],
     exports: [
          PagesComponent,
          
          DashboardComponent,
          AccountSettingsComponent,
          ProfileComponent,
          UsuariosComponent,
          ModalUploadComponent,
          ProductorasComponent,
          MoviesComponent,
          MovieComponent,
          SearchComponent,
     ],
     providers: [],
})
export class PagesModule {}