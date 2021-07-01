import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyInfoRoutingModule } from './company-info-routing.module';
import { CompanyInfoResolver } from './company-info/company-info.resolver';
import { DataRowComponent } from './company-info/data-row/data-row.component';

@NgModule({
  declarations: [CompanyInfoComponent, DataRowComponent],
  imports: [SharedModule, CompanyInfoRoutingModule],
  providers: [CompanyInfoResolver],
})
export class CompanyInfoModule {}
