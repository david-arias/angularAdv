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
          icon: 'fas fa-tachometer-alt ',
          url: '#',
          submenu: [
            {
              titulo: 'Dashboard',
              icon: 'fas fa-tachometer-alt ',
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
          icon: 'far fa-clock',
          url: '#',
          submenu: [
            {
              titulo: 'Promesas',
              icon: 'far fa-clock',
              url: '/promesas',
            }, {
              titulo: 'RxJs',
              icon: 'far fa-clock',
              url: '/rxjs',
            }
          ]
        }
      ]
    }
  ]

  constructor() { }
}
