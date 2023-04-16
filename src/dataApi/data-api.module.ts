import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DataApiService } from './data-api.service';

@Module({
  imports: [HttpModule],
  providers: [DataApiService],
  exports: [DataApiService],
})
export class DataApiModule {}
