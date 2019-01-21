import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(public router:Router) { }

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
      this.router.navigate(['/login']);
    }, 1500);
  }

}
