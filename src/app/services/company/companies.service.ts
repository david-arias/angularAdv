import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { Company } from '../../models/companies.model';
import { UserService } from '../user/user.service';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(
    public http:HttpClient,
    public _us:UserService
  ) { }

  // load companies
  loadCompany( from:number = 0 ) {
    var url = URL_SERVICES + '/company/?from=' + from;
    
    return this.http.get( url );
  }
  loadCompanyById( id:string ) {
    var url = URL_SERVICES + '/company/' + id;
    
    return this.http.get( url );
  }

  // delet companies
  delCompany( id:string ) {
    var url = URL_SERVICES + '/company/' + id + '?token=' + this._us.token;    
    
    return this.http.delete( url );
  }

  // search Companies
  searchComps( term: string ) {
    var url = URL_SERVICES + '/search/category/companies/' + term;
    return this.http.get( url ).pipe( map( (resp:any) => resp.companies ));
  }

  // update Company
  updateComp( comp:Company ) {
    let url = URL_SERVICES + '/company/' + comp._id + '?token=' + this._us.token;

    return this.http.put(url, comp).pipe( map( (resp:any) => resp.company ));

  }

  // create company
  createCompany( comp:Company ) {
    let url = URL_SERVICES + '/company?token=' + this._us.token;

    return this.http.post( url, comp ).pipe( map((resp:any) => resp.company ))
  }
}
