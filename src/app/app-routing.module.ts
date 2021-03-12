import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppPreloadingStrategy } from '@shared';

const routes: Routes = [
  {
    path: 'company-info',
    loadChildren: () =>
      import('./company-info/company-info.module').then(
        (m) => m.CompanyInfoModule
      ),
    data: { preload: true },
  },
  {
    path: 'launches',
    loadChildren: () =>
      import('./launches/launches.module').then((m) => m.LaunchesModule),
    data: { preload: true },
  },
  {
    path: 'rockets',
    loadChildren: () =>
      import('./rockets/rockets.module').then((m) => m.RocketsModule),
    data: { preload: true },
  },
  { path: '', pathMatch: 'full', redirectTo: 'company-info' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: AppPreloadingStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
