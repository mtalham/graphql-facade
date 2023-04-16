import { Module } from '@nestjs/common';
import { TagSummaryService } from './tag-summary.service';
import { TagSummaryResolver } from './tag-summary.resolver';
import { AuthModule } from '../auth/auth.module';
import { DataApiModule } from '../dataApi/data-api.module';
import { AttributesModule } from '../attributes/attributes.module';

@Module({
  imports: [AuthModule, DataApiModule, AttributesModule],
  providers: [TagSummaryResolver, TagSummaryService],
})
export class TagSummaryModule {}
