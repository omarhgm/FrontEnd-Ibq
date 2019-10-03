import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAlreadyExistsComponent } from './dialog-already-exists.component';

describe('DialogAlreadyExistsComponent', () => {
  let component: DialogAlreadyExistsComponent;
  let fixture: ComponentFixture<DialogAlreadyExistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAlreadyExistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAlreadyExistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
