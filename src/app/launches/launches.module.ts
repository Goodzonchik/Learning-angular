import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { LaunchesComponent } from './launches/launches.component';
import { LaunchComponent } from './launch/launch.component';
import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchResolver } from './launch/launch.resolver';

@NgModule({
  declarations: [LaunchesComponent, LaunchComponent],
  imports: [SharedModule, LaunchesRoutingModule],
  providers: [LaunchResolver],
})
export class LaunchesModule {}
