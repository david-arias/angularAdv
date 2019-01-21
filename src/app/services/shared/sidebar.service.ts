import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [
    {
      titulo: 'Personal',
      menu: [
        {
          titulo: 'Dashboard',
          icon: 'ia-config',
          url: '#',
          submenu: [
            {
              titulo: 'Dashboard',
              icon: 'ia-config',
              url: '/dashboard',
            }
          ]
        }
      ]
    }
  ]

  constructor() { }
}
