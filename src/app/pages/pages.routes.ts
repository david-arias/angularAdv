
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

// pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes: Routes = [
     {
          path: '',
          component: PagesComponent,
          children: [
               { path: 'dashboard', component: DashboardComponent },
               { path: 'account-settings', component: AccountSettingsComponent },
               { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
          ] },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
