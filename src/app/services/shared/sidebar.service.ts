import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [];

  constructor(
    public _us:UserService
  ) {
    // this.menu = this._us.menu;
  }
  
  loadMenu() {
    this.menu = this._us.menu;
  }
}
