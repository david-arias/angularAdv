import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


// services
import { UserService } from '../user/user.service';

@Injectable()

export class LoginGuardGuard implements CanActivate {

  constructor( public _us:UserService, public router:Router) {}

  canActivate() {

    if ( this._us.userIsLoged() ) {
      console.log('Paso el Guard');
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log('Bloqueado por el Guard');
      return false;
    }

  }

}
