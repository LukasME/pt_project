import { TestBed } from '@angular/core/testing';

import { BackendInterfaceService } from './backend-interface.service';

describe('BackendInterfaceService', () => {
  let service: BackendInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
