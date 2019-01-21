import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

// Routes
import { APP_ROUTES } from './app.routes';

// components
import { AppComponent } from './app.component';

import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// modules
import { PagesModule } from './pages/pages.module';

// plugins
import { PluginsModule } from './plugins.module';

// services
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent,
    
    NoPageFoundComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTES,

    ServiceModule,

    PluginsModule,

    PagesModule,
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
