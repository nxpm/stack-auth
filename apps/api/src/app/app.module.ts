import { ApiFeatureAuthModule } from '@stack-auth/api/feature-auth'
import { ApiFeatureCoreModule } from '@stack-auth/api/feature-core'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiFeatureAuthModule, ApiFeatureCoreModule],
})
export class AppModule {}
