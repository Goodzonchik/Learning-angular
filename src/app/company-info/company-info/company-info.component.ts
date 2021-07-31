import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { take } from 'rxjs/operators';

import { CompanyInfo, DataRow } from '@types';
import { BreadcrumbsService } from '@shared';
import { getHeadquart, pathGen, numberFormat } from '@utils';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

interface CompanyInfoPageResolver {
  companyInfo: CompanyInfo;
}

@Component({
  selector: 'company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
 // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('dataRowAnimation', [
      transition(':enter', [
        query(':enter', [
        style({ opacity: 0, backgroundColor: '#eaeaea' }),
        stagger(500,
          animate('500ms ease-out', style({ opacity: 1, backgroundColor: 'transparent' }))
          )
        ]),
    ]),
    ])
  ],
})
export class CompanyInfoComponent {
  companyName: string = '';
  viewData: DataRow[] = [];
  x = false;

  constructor(router: ActivatedRoute, breadcrumbsService: BreadcrumbsService) {
    router.data.pipe(take(1)).subscribe(({companyInfo}: CompanyInfoPageResolver) => {
      this.companyName = companyInfo.name;
      this.genViewData(companyInfo);
    });
    breadcrumbsService.setBreadcrumbs(pathGen('about'));
  }

  private genViewData(companyInfo: CompanyInfo) {
    this.viewData = [
      { title: 'founder', value: companyInfo.founder },
      { title: 'founded', value: companyInfo.founded },
      { title: 'employees', value: numberFormat(companyInfo.employees) },
      { title: 'vehicles', value: companyInfo.vehicles },
      { title: 'ceo', value: companyInfo.ceo },
      { title: 'cto', value: companyInfo.cto },
      { title: 'coo', value: companyInfo.coo },
      { title: 'cto propulsion', value: companyInfo.cto_propulsion },
      {
        title: 'valuation',
        value: numberFormat(companyInfo.valuation, 'USD'),
      },
      {
        title: 'headquarters',
        value: getHeadquart(companyInfo.headquarters),
      },
      { title: 'summary', value: companyInfo.summary },
    ];
  }
}