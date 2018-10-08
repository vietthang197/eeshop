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
    const date = new Date();
    this.createProductForm = this.formBuilder.group({
      name: [null, Validators.required],
      categoryId: [null, Validators.required],
      dateCreate: [date, Validators.required],
      price: [0, Validators.required],
      sale: [0, Validators.required],
      description: [null, Validators.required],
      img: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

}
