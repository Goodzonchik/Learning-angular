import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CompanyInfo } from '@models';
import { BreadcrumbsService } from '@shared';
import { pathGen } from '@utils';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

interface CompanyInfoPageResolver {
  companyInfo: CompanyInfo;
}

@Component({
  selector: 'company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyInfoComponent {
  companyInfo: CompanyInfo | null = null;

  constructor(router: ActivatedRoute, breadcrumbsService: BreadcrumbsService) {
    router.data.pipe(take(1)).subscribe((response: CompanyInfoPageResolver) => {
      this.companyInfo = response.companyInfo;
    });
    breadcrumbsService.setBreadcrumbs(pathGen('about'));
  }
}
