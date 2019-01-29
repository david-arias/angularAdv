import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SettingsService, SidebarService, UserService, LoginGuardGuard, ArchivosService, ModalUploadService } from './service.index';

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
    LoginGuardGuard,
    ArchivosService,
    ModalUploadService
  ]
})
export class ServiceModule { }
