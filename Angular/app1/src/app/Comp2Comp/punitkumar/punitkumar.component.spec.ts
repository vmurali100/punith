import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunitkumarComponent } from './punitkumar.component';

describe('PunitkumarComponent', () => {
  let component: PunitkumarComponent;
  let fixture: ComponentFixture<PunitkumarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunitkumarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PunitkumarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
