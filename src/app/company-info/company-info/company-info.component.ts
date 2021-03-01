import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CompanyInfo } from '../../models/company-info';
import { Observable } from 'rxjs';
import { DataService } from '@shared/data.service';
import { BreadcrumbsService } from '@shared/breadcrumbs.service';

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
    breadcrumbsService.setBreadcrumbs([
      {
        caption: 'About',
      },
    ]);
  }
}
