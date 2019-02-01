import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { Company } from '../../models/companies.model';
import { Movie } from '../../models/movies.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  companies:Company[] = [];
  companiesLen:number;
  movies:Movie[] = [];
  moviesLen:number;
  users:User[] = [];
  usersLen:number;

  constructor(
    public router:Router,
    public ActivatedRoute:ActivatedRoute,
    public http:HttpClient
  ) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe( resp => {
      this.search( resp.query );
    })
  }

  search( term:string ) {
    console.log( 'term: ' + term );

    let url = URL_SERVICES + '/search/all/' + term;

    this.http.get( url ).subscribe( (resp:any) => {
      console.log( resp );
      
      this.companies = resp.companies;
      this.companiesLen = resp.companies.length;
      this.movies = resp.movies;
      this.moviesLen = resp.movies.length;
      this.users = resp.users;
      this.usersLen = resp.users.length;
    })
  }

}
