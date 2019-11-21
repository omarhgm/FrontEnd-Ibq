import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicproductsComponent } from './medicproducts.component';

describe('MedicproductsComponent', () => {
  let component: MedicproductsComponent;
  let fixture: ComponentFixture<MedicproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
