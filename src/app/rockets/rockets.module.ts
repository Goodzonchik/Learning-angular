import { NgModule } from '@angular/core';

import { RocketsComponent } from './rockets/rockets.component';
import { RocketComponent } from './rocket/rocket.component';
import { RocketsRoutingModule } from './rockets-routing.module';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [RocketsComponent, RocketComponent],
  imports: [SharedModule, RocketsRoutingModule],
})
export class RocketsModule {}
