import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenzijeComponent } from './recenzije.component';

describe('RecenzijeComponent', () => {
  let component: RecenzijeComponent;
  let fixture: ComponentFixture<RecenzijeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecenzijeComponent]
    });
    fixture = TestBed.createComponent(RecenzijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
