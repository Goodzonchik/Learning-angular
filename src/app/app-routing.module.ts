import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'company-info',
    loadChildren: () =>
      import('./company-info/company-info.module').then(
        (m) => m.CompanyInfoModule
      ),
  },
  {
    path: 'launches',
    loadChildren: () =>
      import('./launches/launches.module').then((m) => m.LaunchesModule),
  },
  {
    path: 'rockets',
    loadChildren: () =>
      import('./rockets/rockets.module').then((m) => m.RocketsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
