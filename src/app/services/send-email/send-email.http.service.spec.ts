import { TestBed } from '@angular/core/testing';

import { SendEmailHttpService } from './send-email.http.service';

describe('SendEmailHttpService', () => {
  let service: SendEmailHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendEmailHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
