import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  pathLogo = 'assets/images/logo_page.jpg';
  pathImage = 'assets/images/403.png';
  pathBtnSearch = 'assets/images/btn_search.png';
  constructor() { }

  ngOnInit() {
  }

}
