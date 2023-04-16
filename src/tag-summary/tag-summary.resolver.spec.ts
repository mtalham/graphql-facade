import { Test, TestingModule } from '@nestjs/testing';
import { TagSummaryResolver } from './tag-summary.resolver';
import { TagSummaryService } from './tag-summary.service';

describe('TagSummaryResolver', () => {
  let resolver: TagSummaryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagSummaryResolver, TagSummaryService],
    }).compile();

    resolver = module.get<TagSummaryResolver>(TagSummaryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
