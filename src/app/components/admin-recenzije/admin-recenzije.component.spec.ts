import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecenzijeComponent } from './admin-recenzije.component';

describe('AdminRecenzijeComponent', () => {
  let component: AdminRecenzijeComponent;
  let fixture: ComponentFixture<AdminRecenzijeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRecenzijeComponent]
    });
    fixture = TestBed.createComponent(AdminRecenzijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
