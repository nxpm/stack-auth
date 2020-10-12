import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminDataAccessAuthModule, IsLoggedInGuard } from '@stack-auth/admin/data-access-auth'
import { AdminDataAccessCoreModule } from '@stack-auth/admin/data-access-core'
import { AdminLayoutComponent } from '@stack-auth/admin/layout'

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'about',
        loadChildren: () => import('@stack-auth/admin/feature-about').then((m) => m.AdminFeatureAboutModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@stack-auth/admin/feature-dashboard').then((m) => m.AdminFeatureDashboardModule),
      },
    ],
  },
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule) },
  {
    path: '',
    loadChildren: () => import('@stack-auth/admin/feature-auth').then((m) => m.AdminFeatureAuthModule),
  },
  { path: '**', redirectTo: '/not-found' },
]

@NgModule({
  imports: [CommonModule, AdminDataAccessCoreModule, AdminDataAccessAuthModule, RouterModule.forRoot(routes)],
})
export class AdminFeatureShellModule {}
