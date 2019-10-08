import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSendMailComponent } from './dialog-send-mail.component';

describe('DialogSendMailComponent', () => {
  let component: DialogSendMailComponent;
  let fixture: ComponentFixture<DialogSendMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSendMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSendMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
