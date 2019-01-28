import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, type: string = 'users'): any {

    let url = URL_SERVICES + '/img';
    
    if ( img && img.indexOf('https') >= 0 ) {
      return img;
    }

    if ( !img ) {
      return `${url}/${type}/noImage`;
    }

    let imgUrl;

    switch( type ) {
      case 'companies':
        imgUrl = `${url}/companies/${img}`;
      break;
        
      case 'movieBacks':
        imgUrl = `${url}/movieBacks/${img}`;
      break;
        
      case 'moviePoster':
        imgUrl = `${url}/moviePoster/${img}`;
      break;
        
      case 'users':
        imgUrl = `${url}/users/${img}`;
      break;

      default:
        console.log('No Image');
        imgUrl = `${url}/${type}/noImage`;
    }

    return imgUrl;
  }

}
