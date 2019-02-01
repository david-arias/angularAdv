
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

// pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProfileComponent } from './profile/profile.component';

import { SearchComponent } from './search/search.component';

// temporal
import { PromesaComponent } from './temporal/promesa/promesa.component';
import { RxjsComponent } from './temporal/rxjs/rxjs.component';

// guards
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { AdminGuard } from '../services/guards/admin.guard';

// mantenimiento
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductorasComponent } from './productoras/productoras.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie.component';


const pagesRoutes: Routes = [
     {
          path: '',
          component: PagesComponent,
          canActivate: [ LoginGuardGuard ],
          children: [
               { path: 'dashboard', component: DashboardComponent, data: {
                    titulo: 'Personal',
                    child: {
                         titulo: 'Dashboard',
                         description: 'Esta es la página de Dashboard'
                    }
               } },
               { path: 'account-settings', component: AccountSettingsComponent, data: {
                    titulo: 'Cuenta',
                    child: {
                         titulo: 'Configuración de cuenta',
                         description: 'Esta es la página de Configuración de cuenta'
                    }
               } },
               { path: 'profile', component: ProfileComponent, data: {
                    titulo: 'Cuenta',
                    child: {
                         titulo: 'Mi perfil',
                         description: 'Esta es la página de Configuración del perfil'
                    }
               } },
               { path: 'search/:query', component: SearchComponent, data: {
                    titulo: 'Cuenta',
                    child: {
                         titulo: 'Busqueda',
                         description: 'Busqueda de productoras - peluculas - usuarios'
                    }
               } },

               // mantenimientos
               { path: 'user-config',
               component: UsuariosComponent,
               canActivate: [ AdminGuard ],
               data: {
                    titulo: 'Cuenta',
                    child: {
                         titulo: 'Mantenimiento usuarios',
                         description: 'Esta es la página de Mantenimiento usuarios'
                    }
               } },
               { path: 'prods-config',
               component: ProductorasComponent,
               canActivate: [ AdminGuard ],
               data: {
                    titulo: 'Cuenta',
                    child: {
                         titulo: 'Mantenimiento productoras',
                         description: 'Esta es la página de Mantenimiento productoras'
                    }
               } },
               { path: 'movies-config',
               component: MoviesComponent,
               canActivate: [ AdminGuard ],
               data: {
                    titulo: 'Cuenta',
                    child: {
                         titulo: 'Mantenimiento Peliculas',
                         description: 'Esta es la página de Mantenimiento Peliculas'
                    }
               } },
               { path: 'movie/:id',
               component: MovieComponent,
               canActivate: [ AdminGuard ],
               data: {
                    titulo: 'Cuenta',
                    child: {
                         titulo: 'Mantenimiento Pelicula',
                         description: 'Esta es la página de Mantenimiento pelicula'
                    }
               } },

               // temporal
               { path: 'promesas', component: PromesaComponent, data: {
                    titulo: 'Temporal',
                    child: {
                         titulo: 'Promesas',
                         description: 'Esta es la página de Promesas'
                    }
               } },
               { path: 'rxjs', component: RxjsComponent, data: {
                    titulo: 'Temporal',
                    child: {
                         titulo: 'RxJs',
                         description: 'Esta es la página de RxJs'
                    }
                    
               } },

               // dafault
               { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
          ] },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
