import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalUploadService {

  public type: string;
  public id: string;

  public closeMod: boolean = false;

  public notification = new EventEmitter<any>();

  constructor() {
    console.log('Modal Upload Service!');
  }

  hideModal(){
    this.closeMod = false;
    this.type = null;
    this.id = null;
  }
  showModal( type:string,id:string ){
    this.closeMod = true;
    this.type = type;
    this.id = id;
  }
}
