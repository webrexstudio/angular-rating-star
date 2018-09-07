import { TestBed, inject } from '@angular/core/testing';

import { StarRatingService } from './star-rating.service';

describe('StarRatingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarRatingService]
    });
  });

  it('should be created', inject([StarRatingService], (service: StarRatingService) => {
    expect(service).toBeTruthy();
  }));
});
