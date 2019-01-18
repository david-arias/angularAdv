import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTES } from './app.routes';

// components
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';

import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';

// modules
import { ClickOutsideModule } from 'ng-click-outside';

// angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    SideBarComponent,
    BreadcrumbsComponent,
    NoPageFoundComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,

    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,

    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
