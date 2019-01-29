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
      titulo: null,
      menu: [
        {
          titulo: 'Mantenimiento',
          icon: 'fas fa-toolbox',
          url: '#',
          submenu: [
            {
              titulo: 'Usuarios',
              icon: 'fas fa-users-cog',
              url: '/user-config',
            },
            {
              titulo: 'Productoras',
              icon: 'fas fa-video',
              url: '/productoras',
            },
            {
              titulo: 'Peliculas',
              icon: 'fas fa-film',
              url: '/peliculas',
            },
            
          ]
        }
      ]
    },
    {
      titulo: null,
      menu: [
        {
          titulo: 'Temporal',
          icon: 'far fa-clock',
          url: '#',
          submenu: [
            {
              titulo: 'Promesas',
              icon: 'fas fa-stopwatch',
              url: '/promesas',
            }, {
              titulo: 'RxJs',
              icon: 'fas fa-stopwatch',
              url: '/rxjs',
            }
          ]
        }
      ]
    }
  ]

  constructor() { }
}
