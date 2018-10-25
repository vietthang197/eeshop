import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-admin-product-dashboard',
  templateUrl: './admin-product-dashboard.component.html',
  styleUrls: ['./admin-product-dashboard.component.css']
})
export class AdminProductDashboardComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle('Admin manager');
  }

  ngOnInit() {
  }

}
