import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user: User;

  uploadImg: File;
  imgTemp: any = null;

  constructor( public _us:UserService) { }

  ngOnInit() {
    this.user = this._us.usuario;        
  }

  updateUser( user:User ) {

    this.user.userName = user.userName;

    if ( !this.user.google ) {
      this.user.userMail = user.userMail;
    }
      
    this._us.updateUser( this.user ).subscribe()

  }

  // image
  selectedImage( file: File ) {    
    if ( !file ) {
      this.uploadImg = null;
      return;
    } 
    if ( file.type.indexOf('image') < 0 ) {
      swal("Solo archivos de imagen", 'El archivo seleccionado no es una imagen', "error");
      this.uploadImg = null;
      return;
    }
    this.uploadImg = file;

    let reader = new FileReader();
    let urlImgTemp = reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.imgTemp = reader.result;
    }
  }
  updateImage() {
    this._us.updateUserImg( this.uploadImg, this.user._id )
  }

}
