import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyInfoRoutingModule } from './company-info-routing.module';
import { CompanyInfoResolver } from './company-info/company-info.resolver';

@NgModule({
  declarations: [CompanyInfoComponent],
  imports: [SharedModule, CompanyInfoRoutingModule],
  providers: [CompanyInfoResolver],
})
export class CompanyInfoModule {}
