import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare var swal:any;


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: User[] = [];
  from: number = 0;

  totalUsers: number = 0;

  loader:boolean = false;
  searching:boolean = false;
  srchVal:string = '';

  constructor(
    public _us:UserService,
    public _mu:ModalUploadService
  ) { }

  ngOnInit() {
    this.loadUsers();

    this._mu.notification.subscribe( resp => {
      this.loadUsers();
    })
  }

  loadUsers() {
    this.loader = true;
    this._us.loadUsers( this.from ).subscribe( (resp:any) => {
      this.usuarios = resp.users;
      this.totalUsers = resp.totalUsers;

      setTimeout(() => {
        this.loader = false;
      }, 250);

    });
  }

  searchUsers( query:string ) {
    this.searching = true;
    if( query.length <= 1 ) {
      this.loadUsers();
      this.searching = false;
      return;
    }
    this.loader = true;
    this._us.searchUsers( query ).subscribe( (resp:User[]) => {
      this.usuarios = resp;
      this.totalUsers = resp.length;

      setTimeout(() => {
        this.loader = false;
      }, 250);
    })
  }
  clearSearch() {
    this.searching = true;
    this.srchVal = '';
    this.loadUsers();
    this.searching = false;
  }

  changeFrom(fromNum:number) {
    let newfrom = this.from + fromNum;
    if ( newfrom >= this.totalUsers ) {
      return;
    }
    if ( newfrom < 0 ) {
      return;
    }

    this.from = newfrom;
    this.loadUsers();
  }

  delUser( user ) {
    if (user._id === this._us.usuario._id ) {
      swal("Error", "No puede borrar usuario", "error");
      return;
    }
    if (user.role === 'ADMIN_ROLE' ) {
      swal("Error", "No puede borrar usuario administrador", "error");
      return;
    }

    swal( {
      title: '¿Esta seguro?',
      text: `Esta a punto de borrar a ${user.userName}`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    } ).then( (del) => {
      if ( del ) {
        this._us.deleteUser( user._id ).subscribe( (resp:any) => {
          this.from = 0;
          swal("Usuario borrado", `El usuario ${user.userName} ha sido eliminado`, "success");
          this.loadUsers();
        });
      }
    } )
  }


  updateUser( user: User ) {    
    this._us.updateUser(user).subscribe();
  }

  showModal( user:User ) {
    this._mu.showModal('users', user._id);
  }

}
