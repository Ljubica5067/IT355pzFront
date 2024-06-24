import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRepertoarComponent } from './admin-repertoar.component';

describe('AdminRepertoarComponent', () => {
  let component: AdminRepertoarComponent;
  let fixture: ComponentFixture<AdminRepertoarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRepertoarComponent]
    });
    fixture = TestBed.createComponent(AdminRepertoarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
