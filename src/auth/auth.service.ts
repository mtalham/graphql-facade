import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private static readonly TENANT = 'https://twindata.io/tid';
  constructor(private readonly jwtService: JwtService) {}

  getTenantIdFrom(headers: string): string {
    const token = headers['authorization'].replace('Bearer ', '');
    const decoded = this.jwtService.decode(token);
    return decoded[AuthService.TENANT];
  }
}
