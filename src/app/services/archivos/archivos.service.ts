import { Injectable } from '@angular/core';
import { URL_SERVICES } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {

  constructor() { }

  uploadFile( file:File, type: string, id: string ) {

    return new Promise ( (resolve, reject) => {

      let formData = new FormData();
      let xhr = new XMLHttpRequest();
  
      formData.append( 'imagen', file, file.name );
      xhr.onreadystatechange = function () {
        /* if (xhr.readyState === 0 ) {
          console.log('readyState 0');
        }
        if (xhr.readyState === 1 ) {
          console.log('readyState 1');
        }
        if (xhr.readyState === 2 ) {
          console.log('readyState 2');
        }
        if (xhr.readyState === 3 ) {
          console.log('readyState 3');
        } */
        if (xhr.readyState === 4 ) {
          console.log('readyState 4');
  
          if ( xhr.status === 200 ) {
            console.log('image upload');
            resolve( JSON.parse(xhr.response) );
          } else {
            console.log('upload failed');
            resolve( JSON.parse(xhr.response) );
          }
        }
        
      }

      var url = URL_SERVICES + '/upload/' + type + '/' + id;

      xhr.open('PUT', url, true );
      xhr.send( formData );

    } )


  }
}
