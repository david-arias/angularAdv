import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    public _us:UserService,
    public router:Router
  ){}
  canActivate(){

    if ( this._us.usuario.role === 'ADMIN_ROLE') {
      return true;
    } else {
      console.log('bloqued by admin guard');
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
