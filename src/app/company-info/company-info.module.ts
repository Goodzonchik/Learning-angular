import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyInfoRoutingModule } from './company-info-routing.module';
import { HeadquartersPipe } from './company-info/headquarters/headquarters.pipe';
import { CompanyInfoResolver } from './company-info/company-info.resolver';

@NgModule({
  declarations: [CompanyInfoComponent, HeadquartersPipe],
  imports: [SharedModule, CompanyInfoRoutingModule],
  providers: [CompanyInfoResolver],
})
export class CompanyInfoModule {}
