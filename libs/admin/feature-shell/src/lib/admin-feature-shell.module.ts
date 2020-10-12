import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminLayoutComponent } from '@stack-auth/admin/layout'

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      // Application routes here
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
  {
    path: '',
    loadChildren: () => import('@stack-auth/admin/feature-auth').then((m) => m.AdminFeatureAuthModule),
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AdminFeatureShellModule {}
