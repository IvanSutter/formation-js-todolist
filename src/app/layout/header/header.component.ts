import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //constructor(private router: Router) { }
  constructor() { }

  ngOnInit() {
  }

  // goHome() {
  //   console.log('go home');
  //   this.router.navigate(['/']);
  // }

}
