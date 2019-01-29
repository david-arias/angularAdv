import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';

import { map } from 'rxjs/operators';

import { User } from '../../models/user.model';
import { Router } from '@angular/router';

import { ArchivosService } from '../archivos/archivos.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuario: User;
  token: string;

  constructor(
    public http: HttpClient,
    public router:Router,
    public _arch:ArchivosService,
  ) {
    this.loadStorage();
  }

  saveStorage ( id:string, token:string, user:User ) {
    localStorage.setItem('id', id );
    localStorage.setItem('token', token );
    localStorage.setItem('user', JSON.stringify(user) );

    this.usuario = user;
    this.token = token;
  }
  loadStorage() {
    if ( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('user'));
    } else {
      this.token = "";
      this.usuario = null;
    }
  }

  userIsLoged() {
    return ( this.token.length >5 )? true : false;
  }

  // login
  login( user:User, remember: boolean = false ) {
    var url = URL_SERVICES + '/login';

    if ( remember ) {
      localStorage.setItem('email', user.userMail );
    } else {
      localStorage.removeItem('email');
    }

    return this.http.post( url, user ).pipe( map( (resp:any)  => {
      this.saveStorage( resp.id, resp.token, resp.usuario );

      return true;
    }))

  }

  // google login
  googleLogin( token: string ) {
    var url = URL_SERVICES + '/login/google';

    return this.http.post( url, { token } ).pipe( map ( (resp:any) => {
      this.saveStorage( resp.usuario._id, resp.token, resp.usuario );                  
      return true;
    }))
  }

  // LOG OUT
  logOut() {
    this.usuario = null;
    this.token = "";

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigate(['/login'])
  }


  // create user
  createUser( user:User ) {
    var url = URL_SERVICES + '/usuario';
    return this.http.post( url, user ).pipe( map( (resp: any) => {
      swal("Usuario creado!", user.userMail , "success");
      return resp.user;
    }) )
  }


  // update user
  updateUser( user:User ) {
    
    var url;
    
    if ( user._id === this.usuario._id ) {
      url = URL_SERVICES + '/usuario/' + this.usuario._id + '?token=' + this.token;
    } else {
      url = URL_SERVICES + '/usuario/' + user._id + '?token=' + this.token;
    }
    console.log( url );

    return this.http.put( url, user ).pipe( map( (resp:any) => {

      if ( user._id === this.usuario._id ) {
        let userDb:User = resp;      
        this.saveStorage( userDb._id, this.token, user );
      }
      swal("Usuario actualizado!", user.userMail , "success");

      return true;
    }))
  }
  updateUserImg( file:File, id: string ) {
    this._arch.uploadFile( file, 'users', id )
      .then( (resp: any) => {
        this.usuario.img = resp.user.img;
        swal("Imagen actualizada!", this.usuario.userName, "success");
        this.saveStorage( id, this.token, this.usuario );
      }).catch( resp => {
        console.log( resp );
        
      })
  }

  // delete user
  deleteUser( id : string ) {
    var url = URL_SERVICES + '/usuario/' + id + '?token=' + this.token;

    return this.http.delete(url);
  }

  // load users
  loadUsers( from: number = 0 ) {
    var url = URL_SERVICES + '/usuario/?from=' + from;

    return this.http.get( url );
  }

  // search users
  searchUsers( term: string ) {
    var url = URL_SERVICES + '/search/category/users/' + term;
    return this.http.get( url ).pipe( map( (resp:any) => resp.users ));
  }
}
