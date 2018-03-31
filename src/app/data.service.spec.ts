import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should have add function',
    inject([DataService], (service: DataService) => {
      expect(service.add).toBeTruthy();
    })
  );

  it('should add correctly',
    inject([DataService], (service: DataService) => {
      expect(service.add(1, 2)).toEqual(3);
    })
  );

});
