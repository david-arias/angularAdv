import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SettingsService, SidebarService, UserService, ArchivosService, ModalUploadService, CompaniesService, MoviesService, LoginGuardGuard, AdminGuard } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    UserService,
    CompaniesService,
    LoginGuardGuard,
    AdminGuard,
    ArchivosService,
    ModalUploadService,
    MoviesService
  ]
})
export class ServiceModule { }
