import { Test, TestingModule } from '@nestjs/testing';
import { TagSummaryService } from './tag-summary.service';

describe('TagSummaryService', () => {
  let service: TagSummaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagSummaryService],
    }).compile();

    service = module.get<TagSummaryService>(TagSummaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
