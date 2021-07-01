import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsComponent } from './ships/ships.component';
import { ShipComponent } from './ship/ship.component';



@NgModule({
  declarations: [ShipsComponent, ShipComponent],
  imports: [
    CommonModule
  ]
})
export class ShipsModule { }
