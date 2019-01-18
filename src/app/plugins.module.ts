
import { NgModule } from '@angular/core';

// plugins module
import { ClickOutsideModule } from 'ng-click-outside';

// material design Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
     declarations: [
     ],
     imports: [

          ClickOutsideModule,
          BrowserAnimationsModule,
          MatInputModule,
          MatCheckboxModule
          
     ],
     exports: [
          ClickOutsideModule,
          BrowserAnimationsModule,
          MatInputModule,
          MatCheckboxModule
     ],
     providers: [],
})
export class PluginsModule {}