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
    data: { preload: true, animation: 'companyInfo'}
  },
  {
    path: 'launches',
    loadChildren: () =>
      import('./launches/launches.module').then((m) => m.LaunchesModule),
    data: { preload: true, animation: 'launches' },
  },
  {
    path: 'rockets',
    loadChildren: () =>
      import('./rockets/rockets.module').then((m) => m.RocketsModule),
    data: { preload: true, animation: 'rockets' },
  },
  {
    path: 'feedback',
    loadChildren: () =>
      import('./feedback/feedback.module').then((m) => m.FeedbackModule),
    data: { preload: true, animation: 'feedback' },
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
