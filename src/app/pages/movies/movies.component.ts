import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movie/movies.service';
import { Movie } from '../../models/movies.model';
import { UserService } from 'src/app/services/service.index';

declare var swal:any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {

  movies:Movie[] = [];

  loader:boolean = false;
  searching:boolean = false;
  srchVal:string = '';

  from: number = 0;
  totalMovies: number = 0;

  constructor(
    public _mos:MoviesService,
    public _us:UserService
  ) { }

  ngOnInit() {
    this.loadMovies()
  }

  // load movies 
  loadMovies() {
    this._mos.loadMovies( this.from ).subscribe( (resp:any) => {
      this.totalMovies = resp.totalMovies;
      this.movies = resp.movies;
    });
  }

  changeFrom(fromNum:number) {
    let newfrom = this.from + fromNum;
    if ( newfrom >= this.totalMovies ) {
      return;
    }
    if ( newfrom < 0 ) {
      return;
    }

    this.from = newfrom;
    this.loadMovies();
  }

  // search movies
  searchMovie( query:string ) {
    this.searching = true;
    if( query.length <= 1 ) {
      this.loadMovies();
      this.searching = false;
      return;
    }
    this.loader = true;

    this._mos.searchMovie( query ).subscribe( (resp:Movie[]) => {
      this.movies = resp;
      this.totalMovies = resp.length;
      setTimeout(() => {
        this.loader = false;
      }, 250);
    } )
  }
  clearSearch() {
    this.searching = true;
    this.srchVal = '';
    this.loadMovies();
    this.searching = false;
  }

  // delete movie 
  deleteMovie( movie:Movie ) {
    if ( this._us.usuario.role != 'ADMIN_ROLE') {
      console.log("can't delete");
      return;
    }

    swal( {
      title: '¿Esta seguro?',
      text: `Esta a punto de borrar a ${movie.movieName}`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    } ).then( (del) => {
      if ( del ) {
        this._mos.delMovie( movie._id ).subscribe( (resp:any) => {
          this.from = 0;
          swal("Pelicula borrada", `la pelicula ${movie.movieName} ha sido eliminada`, "success");
          this.loadMovies();
        })
      }
    } )
  }

}
