import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { DtmName, ItemAttribute } from '../types/graphql';
import { DataApiService } from '../dataApi/data-api.service';

@Injectable()
export class AttributesService {
  constructor(private readonly dataApi: DataApiService) {}

  getItemAttributes(
    tenantId: string,
    twinId: string,
    itemId: string,
  ): Observable<ItemAttribute[]> {
    return this.dataApi.getItemAttributes(tenantId, twinId, itemId).pipe(
      map((response) =>
        response.map((it) => {
          const { type, value, id, code, dtmName } = it;
          return {
            type,
            value,
            id,
            code,
            dtmName: dtmName !== null ? this.mapDtmName(dtmName) : null,
          };
        }),
      ),
    );
  }

  mapDtmName(dtmName: string): DtmName {
    const cases = {
      hasSystem: DtmName.SYSTEM,
      hasLocation: DtmName.AREA_CODE,
      hasResponsibleDiscipline: DtmName.DISCIPLINE,
      hasFunctionCode: DtmName.FUNCTION_CODE,
      hasProcurementPackage: DtmName.PROCUREMENT_PACKAGE,
      Facility: DtmName.FACILITY,
      isVoided: DtmName.VOIDED,
      isDeleted: DtmName.DELETED,
    };
    return cases[dtmName] || DtmName.UNKNOWN;
  }
}
