import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: []
})
export class PromesaComponent implements OnInit {

  constructor() {
    this.contarTres()
      .then( mssg => console.log('finish ', mssg ) )
      .catch( error => console.error('error', error ) )
  }

  ngOnInit() {
  }

  contarTres() {

    let prom = new Promise( (resolve, reject) => {

      let count = 0;

      let interval = setInterval( () => {
        count += 1;
        console.log( count );

        if ( count === 5 ) {
          resolve( 'OK!' );
          // reject( 'simple error' );
          clearInterval( interval );
        }
        
      }, 1000);

    } );
    return prom;

  }

}
