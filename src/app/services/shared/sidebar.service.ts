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
    },
    {
      titulo: '',
      menu: [
        {
          titulo: 'Temporal',
          icon: 'ia-config',
          url: '#',
          submenu: [
            {
              titulo: 'Promesas',
              icon: 'ia-config',
              url: '/promesas',
            }, {
              titulo: 'RxJs',
              icon: 'ia-config',
              url: '/rxjs',
            }
          ]
        }
      ]
    }
  ]

  constructor() { }
}
