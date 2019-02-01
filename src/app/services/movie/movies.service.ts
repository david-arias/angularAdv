import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../../config/config';
import { UserService } from '../user/user.service';
import { Movie } from '../../models/movies.model';

declare var swal:any;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    public http:HttpClient,
    public _us:UserService
  ) { }


  // load movies
  loadMovies( from:number = 0 ) {
    var url = URL_SERVICES + '/movie/?from=' + from;
    
    return this.http.get( url );
  }
  loadMovieById( id:string ) {
    var url = URL_SERVICES + '/movie/' + id;
    
    return this.http.get( url ).pipe(
      map( (resp:any) => resp.movie )
    );
  }

  // search Movies
  searchMovie( term: string ) {
    var url = URL_SERVICES + '/search/category/movies/' + term;
    return this.http.get( url ).pipe( map( (resp:any) => resp.movies ));
  }


  // save Movies
  saveMovie( movie:Movie ) {

    if ( movie._id) {
      var url = URL_SERVICES + '/movie/' + movie._id + '?token=' + this._us.token;

      return this.http.put( url, movie ).pipe(
        map ( (resp:any) => {
          swal("Pelicula actualizada", `la pelicula ${movie.movieName} ha sido actualizada`, "success");
          return resp;
        })
      );
    } else {
      var url = URL_SERVICES + '/movie/?token=' + this._us.token;
    
      return this.http.post( url, { movieName: movie.movieName, company: movie.company['_id'] } ).pipe(
        map ( (resp:any) => {
          swal("Pelicula creada", `la pelicula ${movie.movieName} ha sido creada`, "success");
          return resp;
        })
      );
    }

  }


  // delete movie 
  delMovie( id:string ) {
    var url = URL_SERVICES + '/movie/' + id + '?token=' + this._us.token;
    return this.http.delete( url );
  }
}
