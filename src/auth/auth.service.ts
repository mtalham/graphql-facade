import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

type HeadersWithAuthAndTwinId = { authorization: string; 'x-twin-id': string };

@Injectable()
export class AuthService {
  private static readonly TENANT = 'https://twindata.io/tid';
  constructor(private readonly jwtService: JwtService) {}

  getTenantAndTwinIdFrom(headers: HeadersWithAuthAndTwinId): {
    tenant: string;
    twinId: string;
  } {
    const token = headers['authorization'].replace('Bearer ', '');
    const decoded = this.jwtService.decode(token);
    return {
      tenant: decoded[AuthService.TENANT],
      twinId: headers['x-twin-id'],
    };
  }
}
