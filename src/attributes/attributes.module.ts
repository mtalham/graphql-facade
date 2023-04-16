import { Module } from '@nestjs/common';
import { AttributesService } from './attributes.service';
import { DataApiModule } from '../dataApi/data-api.module';

@Module({
  imports: [DataApiModule],
  providers: [AttributesService],
  exports: [AttributesService],
})
export class AttributesModule {}
