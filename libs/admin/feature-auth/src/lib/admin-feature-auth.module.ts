import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule) },
    ]),
  ],
})
export class AdminFeatureAuthModule {}
