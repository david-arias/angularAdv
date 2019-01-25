import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

// services
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';

declare var $:any;

declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  forgetPass:boolean = false;
  remember:boolean = false;

  email: string;

  auth2:any;

  constructor( public router:Router, public _us:UserService, private zone: NgZone ) { }

  ngOnInit() {

    // get email | remember
    this.email = localStorage.getItem('email') || '';

    if ( this.email.length > 1 ) {
      this.remember = true;
    }

    // google SignIn
    this.googleInit();

    // loader curtain
    setTimeout(() => {
      $(".maskInit").addClass('active');
    }, 100);
    setTimeout(() => {
      $(".wrapper").removeClass('maskInit active');
    }, 2100);
  }

  goToReg() {

    // loader curtain
    $(".wrapper").addClass("maskInit OutActive");

    setTimeout(() => {
      this.router.navigate(['/register']);
    }, 1500);
  }

  // google SignIn
  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '559025252451-rt9ko6p0sn4pogussmg3atdvf2supeq8.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      })

      this.attachSignIn( document.getElementById('btnGoogle') );
    })
  }
  attachSignIn( element ) {
    this.auth2.attachClickHandler( element, {}, googleUser => {
      // let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;

      this.zone.run( () => {

        this._us.googleLogin( token ).subscribe( resp => {
          this.router.navigate(['/dashboard']);
          // window.location.href = '#/dashboard';
        });
        
      })

      
      
    })
  }

  logIn( forma: NgForm ) {

    if ( forma.invalid ) {
      return;
    }

    let user = new User(null, forma.value.userMail, forma.value.userPsswrd);

    this._us.login( user, forma.value.remember ).subscribe( resp => this.router.navigate(['/dashboard']) );
    
  }

}
