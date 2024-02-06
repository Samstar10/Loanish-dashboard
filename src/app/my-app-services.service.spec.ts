import { TestBed } from '@angular/core/testing';

import { MyAppServicesService } from './my-app-services.service';

describe('MyAppServicesService', () => {
  let service: MyAppServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAppServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
