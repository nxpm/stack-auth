import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { ActionReducer, StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { storageSync } from '@larscom/ngrx-store-storagesync'
import { environment } from '../environments/environment'

import { AdminFeatureCoreGraphQLModule } from './admin-feature-core-graphql.module'

export function storageSyncReducer(reducer: ActionReducer<unknown>) {
  const sync = storageSync({
    features: [{ stateKey: 'auth' }],
    storage: window.localStorage,
  })

  return sync(reducer)
}

@NgModule({
  imports: [
    HttpClientModule,
    AdminFeatureCoreGraphQLModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [storageSyncReducer] : [storageSyncReducer],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      },
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class AdminFeatureCoreModule {}
