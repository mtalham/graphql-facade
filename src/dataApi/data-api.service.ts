import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ItemAttributes } from './models/data-api.interface';
import { map, Observable } from 'rxjs';

@Injectable()
export class DataApiService {
  private static readonly GET_ATTRIBUTES_BY_ITEM_ID =
    '/api/v2/item-attributes?item-id=%s&page=%d&size=%d';

  static readonly GET_ITEM_BY_ID = '/api/v1/items?item-id=%s';

  constructor(private readonly httpService: HttpService) {}

  getItemAttributes(
    tenantId: string,
    twinId: string,
    itemId: string,
  ): Observable<ItemAttributes[]> {
    const url = DataApiService.GET_ATTRIBUTES_BY_ITEM_ID.replace('%s', itemId)
      .replace('%d', '0')
      .replace('%d', '-1');

    return this.httpService
      .get(`http://localhost:8881${url}`, {
        headers: { 'X-Tenant-Id': tenantId, 'X-Twin-Id': twinId },
      })
      .pipe(map((res) => res.data?.content));
  }

  getItemById(tenantId: string, twinId: string, itemId: string) {
    const url = DataApiService.GET_ITEM_BY_ID.replace('%s', itemId);

    return this.httpService.get(`http://localhost:8881${url}`, {
      headers: { 'X-Tenant-Id': tenantId, 'X-Twin-Id': twinId },
    });
  }
}
