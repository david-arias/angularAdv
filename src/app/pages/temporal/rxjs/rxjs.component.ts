import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription:Subscription;

  constructor() {

    this.subscription = this.returnObs()
    // .pipe(
    //   retry(3)
    // )
    .subscribe(
      num => console.log( 'subs', num ),
      error => console.error('Error en el obs', error),
      () => console.log( 'obs terminó' )
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('exit page');
    
    this.subscription.unsubscribe();
  }

  returnObs(): Observable<any> {
    let obs = new Observable( observer => {

      let count = 0;

      let interval = setInterval( () => {
        count += 1;

        let out = {
          valor: count
        };

        observer.next( out );

        // if ( count === 5 ) {
        //   clearInterval( interval );
        //   observer.complete();
        // }
        
        // if ( count === 3 ) {
        //   clearInterval( interval );
        //   observer.error(' HELP! ');
        // }

      }, 1000)

    });

    return obs.pipe( 
      map( resp => resp['valor'] ),
      filter( ( valor, index ) => {
        if ( ( valor % 2 ) === 1 ) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })
    );
  }

}
