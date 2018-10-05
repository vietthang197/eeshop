import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductDashboardComponent } from './admin-product-dashboard.component';

describe('AdminProductDashboardComponent', () => {
  let component: AdminProductDashboardComponent;
  let fixture: ComponentFixture<AdminProductDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
