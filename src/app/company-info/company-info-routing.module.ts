import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyInfoResolver } from './company-info/company-info.resolver';

const routes: Routes = [
  {
    path: '',
    component: CompanyInfoComponent,
    resolve: {
      companyInfo: CompanyInfoResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyInfoRoutingModule {}
