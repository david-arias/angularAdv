import { Component, OnInit } from '@angular/core';
import { ArchivosService } from '../../services/archivos/archivos.service';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  uploadImg: File;
  imgTemp: any = null;

  constructor(
    public _arch:ArchivosService,
    public _mu:ModalUploadService,
  ) { }

  ngOnInit() {}

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

  // upload image
  uploadImgDb() {
    console.log('upload img');
    this._arch.uploadFile( this.uploadImg, this._mu.type, this._mu.id)
    .then( resp => {      
      this._mu.notification.emit(resp);
      this.closeModal();

    }).catch( resp => {
      console.log('Error en la carga...');
    });
  }

  // close modal
  closeModal() {
    this._mu.hideModal();
    this.uploadImg = null;
    this.imgTemp = null;
  }

}
