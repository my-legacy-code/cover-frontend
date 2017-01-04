/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KeywordService } from './keyword.service';

describe('KeywordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeywordService]
    });
  });

  it('should get list of keywords', inject([KeywordService], (service: KeywordService) => {
    expect(service).toBeTruthy();
  }));
});
