import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdemoComponent } from './productdemo.component';

describe('ProductdemoComponent', () => {
  let component: ProductdemoComponent;
  let fixture: ComponentFixture<ProductdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
