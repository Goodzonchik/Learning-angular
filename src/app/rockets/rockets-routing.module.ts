import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RocketComponent } from './rocket/rocket.component';
import { RocketResolver } from './rocket/rocket.resolver';
import { RocketsComponent } from './rockets/rockets.component';

const routes: Routes = [
  {
    path: '',
    component: RocketsComponent,
    data: { animation: 'rockets'}
  },
  {
    path: ':rocket_id',
    component: RocketComponent,
    resolve: {
      rocket: RocketResolver,
    },
    data: { animation: 'rocket'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RocketsRoutingModule {}
