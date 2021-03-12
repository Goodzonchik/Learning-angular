import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable } from 'rxjs';

import { CompanyInfo } from '@models';
import { DataService, BreadcrumbsService } from '@shared';
import { pathGen } from '@utils';

@Component({
  selector: 'company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyInfoComponent {
  companyInfo$: Observable<CompanyInfo> = this.dataService.getData<CompanyInfo>(
    'info'
  );

  constructor(
    private dataService: DataService,
    breadcrumbsService: BreadcrumbsService
  ) {
    breadcrumbsService.setBreadcrumbs(pathGen('about'));
  }
}
