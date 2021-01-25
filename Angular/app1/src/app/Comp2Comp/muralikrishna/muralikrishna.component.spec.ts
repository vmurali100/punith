import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralikrishnaComponent } from './muralikrishna.component';

describe('MuralikrishnaComponent', () => {
  let component: MuralikrishnaComponent;
  let fixture: ComponentFixture<MuralikrishnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralikrishnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralikrishnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
