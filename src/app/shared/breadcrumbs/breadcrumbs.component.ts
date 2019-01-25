import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  tittleDad:string;
  tittle:string;
  description:string;

  constructor( private router:Router, private title:Title, private meta:Meta ) {

      this.getDataRoute().subscribe( evnt => {

        if ( evnt.titulo ) {
          
          this.tittleDad = evnt.titulo;
          this.tittle = evnt.child.titulo;
          this.description = evnt.child.description;
  
          this.title.setTitle('Admin | ' + this.tittle);
  
          const metaTag:MetaDefinition = {
            name: 'description',
            content: this.description
          }
  
          this.meta.updateTag( metaTag );

        }
        
      })
  }

  ngOnInit() {
  }

  ngOnDestroy () {
    this.getDataRoute()
  }


  getDataRoute() {

    return this.router.events
      .pipe(
        filter( evento => evento instanceof ActivationEnd ),
        filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
        map( (evento: ActivationEnd) => evento.snapshot.data )
      )

  }

}
