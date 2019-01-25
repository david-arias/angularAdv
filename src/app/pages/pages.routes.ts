
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

// pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// temporal
import { PromesaComponent } from './temporal/promesa/promesa.component';
import { RxjsComponent } from './temporal/rxjs/rxjs.component';

// guards
import { LoginGuardGuard } from '../services/guards/login-guard.guard';

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
               { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
          ] },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
