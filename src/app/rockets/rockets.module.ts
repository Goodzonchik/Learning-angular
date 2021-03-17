import { NgModule } from '@angular/core';

import { RocketsComponent } from './rockets/rockets.component';
import { RocketComponent } from './rocket/rocket.component';
import { RocketsRoutingModule } from './rockets-routing.module';
import { SharedModule } from '@shared';
import { RocketResolver } from './rocket/rocket.resolver';

@NgModule({
  declarations: [RocketsComponent, RocketComponent],
  imports: [SharedModule, RocketsRoutingModule],
  providers: [RocketResolver],
})
export class RocketsModule {}
