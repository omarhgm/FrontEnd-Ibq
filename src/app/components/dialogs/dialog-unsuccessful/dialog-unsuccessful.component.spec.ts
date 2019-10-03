import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUnsuccessfulComponent } from './dialog-unsuccessful.component';

describe('DialogUnsuccessfulComponent', () => {
  let component: DialogUnsuccessfulComponent;
  let fixture: ComponentFixture<DialogUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
