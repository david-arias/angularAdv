import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/companies.model';
import { CompaniesService } from '../../services/company/companies.service';
import { UserService } from '../../services/user/user.service';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare var swal:any;

@Component({
  selector: 'app-productoras',
  templateUrl: './productoras.component.html',
  styles: []
})
export class ProductorasComponent implements OnInit {

  companies: Company[] = [];
  from: number = 0;

  totalCompanies: number = 0;

  loader:boolean = false;
  searching:boolean = false;
  srchVal:string = '';

  constructor( public _cs:CompaniesService, public _us:UserService , public _mu:ModalUploadService) { }

  ngOnInit() {
    this.loadCompanies();
  }

  searchComp( query:string ) {
    this.searching = true;
    if( query.length <= 1 ) {
      this.loadCompanies();
      this.searching = false;
      return;
    }
    this.loader = true;

    this._cs.searchComps( query ).subscribe( (resp:Company[]) => {      
      this.companies = resp;
      this.totalCompanies = resp.length;
      setTimeout(() => {
        this.loader = false;
      }, 250);
    } )
  }
  clearSearch() {
    this.searching = true;
    this.srchVal = '';
    this.loadCompanies();
    this.searching = false;
  }

  changeFrom(fromNum:number) {
    let newfrom = this.from + fromNum;
    if ( newfrom >= this.totalCompanies ) {
      return;
    }
    if ( newfrom < 0 ) {
      return;
    }

    this.from = newfrom;
    this.loadCompanies();
  }

  loadCompanies() {
    this.loader = true;

    this._cs.loadCompany().subscribe( (resp:any) => {
      this.companies = resp.companies;
      this.totalCompanies = resp.totalCompanies;
      setTimeout(() => {
        this.loader = false;
      }, 250);
      
    })
    
  }

  delComp( comp:Company ) {
    if ( this._us.usuario.role != 'ADMIN_ROLE') {
      console.log("can't delete");
      return;
    }

    swal( {
      title: '¿Esta seguro?',
      text: `Esta a punto de borrar a ${comp.compName}`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    } ).then( (del) => {
      if ( del ) {
        this._cs.delCompany( comp._id ).subscribe( (resp:any) => {
          this.from = 0;
          swal("Productora borrada", `la Productora ${comp.compName} ha sido eliminado`, "success");
          this.loadCompanies();
        });
      }
    } )
    
  }

  updateComp( comp:Company ) {
    if ( this._us.usuario.role != 'ADMIN_ROLE') {
      console.log("can't edit");
      return;
    }

    this._cs.updateComp( comp ).subscribe( (resp:any) => {      
      swal("Productora actualizada!", resp.compName , "success");
      this.loadCompanies();
    });
  }

  addComp() {

    if ( this._us.usuario.role != 'ADMIN_ROLE') {
      console.log("can't add");
      return;
    }

    swal( {
      title: '¿Que productora deseas agregar?',
      content: "input",
      buttons: true,
      dangerMode: true,
    } ).then((value) => {

      if ( value ) {
        let comp:Company = {
          'compName': value,
        }
        this._cs.createCompany(comp).subscribe( (resp:any) => {
          swal("Productora Creada!", `La producto ${resp.compName} ha sido creada con éxito!` , "success");
          this.loadCompanies();
        });
      }
      
    });

  }

  showModal( comp:Company ) {
    this._mu.showModal('companies', comp._id);
  }

}
