import { ApiDataAccessCoreModule } from '@stack-auth/api/data-access-core'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { ApiDataAccessAuthService } from './api-data-access-auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  imports: [
    ApiDataAccessCoreModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'NXPM_STACK_SECRET2884863',
    }),
  ],
  exports: [ApiDataAccessAuthService],
  providers: [ApiDataAccessAuthService, JwtStrategy],
})
export class ApiDataAccessAuthModule {}
