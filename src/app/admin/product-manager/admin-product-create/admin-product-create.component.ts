import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.css']
})
export class AdminProductCreateComponent implements OnInit {
  createProductForm: FormGroup;
  submitted = false;
  feedBackCreateProduct = '';

  constructor(private formBuilder: FormBuilder) {
    this.createProductForm = this.formBuilder.group({
      name: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

}
