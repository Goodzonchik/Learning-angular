import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { take } from 'rxjs/operators';

import { CompanyInfo } from '@types';
import { BreadcrumbsService } from '@shared';
import { getHeadquart, pathGen } from '@utils';
import { numberFormat } from '@utils/number-format';

interface CompanyInfoPageResolver {
  companyInfo: CompanyInfo;
}

// TODO перенести в types
export type DataRow = {
  title: string;
  value: string | number;
};

@Component({
  selector: 'company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyInfoComponent {
  companyInfo: CompanyInfo | null = null;
  viewData: DataRow[] = [];

  constructor(router: ActivatedRoute, breadcrumbsService: BreadcrumbsService) {
    router.data.pipe(take(1)).subscribe((response: CompanyInfoPageResolver) => {
      this.companyInfo = response.companyInfo;
      this.genViewData();
    });
    breadcrumbsService.setBreadcrumbs(pathGen('about'));
  }

  private genViewData() {
    this.viewData = [
      { title: 'founder', value: this.companyInfo.founder },
      { title: 'founded', value: this.companyInfo.founded },
      { title: 'employees', value: numberFormat(this.companyInfo.employees) },
      { title: 'vehicles', value: this.companyInfo.vehicles },
      { title: 'ceo', value: this.companyInfo.ceo },
      { title: 'cto', value: this.companyInfo.cto },
      { title: 'coo', value: this.companyInfo.coo },
      { title: 'cto propulsion', value: this.companyInfo.cto_propulsion },
      {
        title: 'valuation',
        value: numberFormat(this.companyInfo.valuation, 'USD'),
      },
      {
        title: 'headquarters',
        value: getHeadquart(this.companyInfo.headquarters),
      },
      { title: 'summary', value: this.companyInfo.summary },
    ];
  }
}
