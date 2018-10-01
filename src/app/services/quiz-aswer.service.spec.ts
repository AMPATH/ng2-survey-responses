import { TestBed, inject } from '@angular/core/testing';

import { QuizAswerService } from './quiz-aswer.service';

describe('QuizAswerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizAswerService]
    });
  });

  it('should be created', inject([QuizAswerService], (service: QuizAswerService) => {
    expect(service).toBeTruthy();
  }));
});
