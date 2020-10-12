import { NgModule } from '@angular/core'

import { AdminDataAccessCoreService } from './admin-data-access-core.service'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '@stack-auth/admin/feature-core'

@NgModule({
  imports: [
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      },
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [AdminDataAccessCoreService],
})
export class AdminDataAccessCoreModule {}
