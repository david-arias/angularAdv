import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Company } from '../../models/companies.model';
import { MoviesService } from '../../services/movie/movies.service';
import { CompaniesService } from '../../services/company/companies.service';
import { Movie } from '../../models/movies.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  companies:Company[] = [];
  movie: Movie = new Movie('','');

  company: Company = new Company('');


  constructor(
    public router:Router,
    public _mov:MoviesService,
    public _mu:ModalUploadService,
    public _cs:CompaniesService,
    public activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe( params => {
      let id = params['id'];

      if ( id !== 'nuevo') {
        this.loadMovie( id );
      }
    })
  }

  ngOnInit() {
    this.getCompanies();

    this._mu.notification.subscribe( resp => {
      console.log( resp );
      this.movie.moviePoster = resp.movie.moviePoster;
      this.movie.movieBackdrop = resp.movie.movieBackdrop;
    } )
  }

  getCompanies() {
    this._cs.loadCompany().subscribe( (resp:any) => {
      this.companies = resp.companies;
      // console.log( this.companies );
    })
  }
  loadMovie( id: string ) {
    this._mov.loadMovieById( id ).subscribe( (movie:any) => {
      this.movie = movie;
      this.changeComp( movie.company._id );
      // console.log( this.movie );
    } );
  }



  saveMovie( forma:NgForm ) {
    // console.log( forma.valid );
    // console.log( forma.value );

    if ( !forma.valid  ) {
      return;
    }

    // console.log( this.movie );

    this._mov.saveMovie( this.movie ).subscribe( resp => {
      console.log( resp );
      if ( !this.movie._id ) {
        this.movie._id = resp.movie._id;
        this.router.navigate(['/movie', resp.movie._id])
      }
    })
  }

  changeComp( selId ) {

    if ( !selId ) {
      return;
    }
    this._cs.loadCompanyById( selId ).subscribe( (resp:any) => {
      this.company = resp.company;
      this.movie.company = resp.company;
    })
  }

  changePoster() {
    this._mu.showModal( 'moviePoster', this.movie._id);
  }
  changeBack() {
    this._mu.showModal( 'movieBacks', this.movie._id);
  }

}
