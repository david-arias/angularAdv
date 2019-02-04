import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import swal from 'sweetalert';

// models
import { User } from '../models/user.model';

// services
import { UserService } from '../services/service.index';

declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})

export class RegisterComponent implements OnInit {

  forma: FormGroup;
  constructor(public router:Router, public _us:UserService) { }

  ngOnInit() {

    this.forma= new FormGroup({
      userName: new FormControl(null, Validators.required),
      userMail: new FormControl(null, [Validators.required, Validators.email]),
      userPsswrd: new FormControl(null, Validators.required),
      userPsswrd2: new FormControl(null, Validators.required),
      terms: new FormControl( false ),
    }, { validators: this.sameFieldValue( 'userPsswrd', 'userPsswrd2') } );

    this.forma.setValue( {
      userName: "Test",
      userMail: "test@test.com",
      userPsswrd: "123456",
      userPsswrd2: "123456",
      terms: true
    })

    // loader curtain
    setTimeout(() => {
      $(".maskInit").addClass('active');
    }, 100);
    setTimeout(() => {
      $(".wrapper").removeClass('maskInit active');
    }, 2100);
  }

  sameFieldValue( field1: string, field2: string ) {
    return ( group:FormGroup ) => {

      let field1Val = group.controls[field1].value;
      let field2Val = group.controls[field2].value;

      if  ( field1Val === field2Val) {
        return null;
      }

      return {
        sonIguales: true,
      }
    }
  }

  goToLogin() {

    // loader curtain
    $(".wrapper").addClass("maskInit OutActive");
    // navegate login
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1500);
  }


  registerUser() {
    // console.log(this.forma.value);

    if ( this.forma.invalid ) {
      console.log('formulario inválido | valid: ', this.forma.valid);
      return;
    }
    
    if ( !this.forma.value.terms ) {
      console.log('términos no aceptados');
      swal("Importante!", "Debes aceptar los términos", "warning");
      return;
    }

    let user = new User(
      this.forma.value.userName,
      this.forma.value.userMail,
      this.forma.value.userPsswrd
    )

    this._us.createUser( user ).subscribe( res => {
      // console.log( res );
      this.goToLogin();
    })
  }

}
