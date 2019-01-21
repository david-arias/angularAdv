import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  forgetPass:boolean = false;

  constructor( public router:Router ) { }

  ngOnInit() {
    setTimeout(() => {
      $(".maskInit").addClass('active');
    }, 100);
    setTimeout(() => {
      $(".wrapper").removeClass('maskInit active');
    }, 2100);
  }

  goToReg() {
    $(".wrapper").addClass("maskInit OutActive");

    setTimeout(() => {
      this.router.navigate(['/register']);
    }, 1500);
  }

  logIn() {
    this.router.navigate(['/dashboard']);
  }

}
