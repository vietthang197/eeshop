import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllUserComponent } from './admin-all-user.component';

describe('AdminAllUserComponent', () => {
  let component: AdminAllUserComponent;
  let fixture: ComponentFixture<AdminAllUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAllUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
