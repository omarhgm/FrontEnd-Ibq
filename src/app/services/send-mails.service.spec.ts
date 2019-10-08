import { TestBed } from '@angular/core/testing';

import { SendMailsService } from './send-mails.service';

describe('SendMailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendMailsService = TestBed.get(SendMailsService);
    expect(service).toBeTruthy();
  });
});
