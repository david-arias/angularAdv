import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTES } from './app.routes';

// components
import { AppComponent } from './app.component';

import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// modules
import { PagesModule } from './pages/pages.module';

// modules
import { PluginsModule } from './plugins.module';


@NgModule({
  declarations: [
    AppComponent,
    
    NoPageFoundComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,

    PluginsModule,

    PagesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
