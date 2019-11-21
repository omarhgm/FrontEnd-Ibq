import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingproductsComponent } from './clothingproducts.component';

describe('ClothingproductsComponent', () => {
  let component: ClothingproductsComponent;
  let fixture: ComponentFixture<ClothingproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
