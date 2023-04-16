import { Injectable } from '@nestjs/common';
import { DataApiService } from '../dataApi/data-api.service';
import { map, Observable } from 'rxjs';
import { ItemAttribute } from '../types/graphql';
import { AttributesService } from '../attributes/attributes.service';

@Injectable()
export class TagSummaryService {
  constructor(
    private readonly dataApi: DataApiService,
    private readonly attributeService: AttributesService,
  ) {}

  findByItemBy(tenantId: string, twinId: string, itemId: string) {
    return this.dataApi.getItemById(tenantId, twinId, itemId).pipe(
      map((res) => {
        const { name, description } = res.data;
        return { id: res.data['item-id'], tagNumber: name, description };
      }),
    );
  }

  getItemAttributes(
    tenantId: string,
    twinId: string,
    itemId: string,
  ): Observable<ItemAttribute[]> {
    return this.attributeService.getItemAttributes(tenantId, twinId, itemId);
  }
}
