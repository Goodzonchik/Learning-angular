import { NgModule } from '@angular/core';

import { TuiMoneyModule } from '@taiga-ui/addon-commerce';

import { SharedModule } from '@shared';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyInfoRoutingModule } from './company-info-routing.module';
import { HeadquartersPipe } from './company-info/headquarters/headquarters.pipe';

@NgModule({
  declarations: [CompanyInfoComponent, HeadquartersPipe],
  imports: [SharedModule, CompanyInfoRoutingModule, TuiMoneyModule],
})
export class CompanyInfoModule {}
