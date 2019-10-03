import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarproductsComponent } from './carproducts.component';

describe('CarproductsComponent', () => {
  let component: CarproductsComponent;
  let fixture: ComponentFixture<CarproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
