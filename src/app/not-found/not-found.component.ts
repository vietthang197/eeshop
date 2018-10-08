import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  pathLogo = 'assets/images/logo_page.jpg';
  pathImage = 'assets/images/404_image.png';
  pathBtnSearch = 'assets/images/btn_search.png';
  constructor() { }

  ngOnInit() {
  }

}
