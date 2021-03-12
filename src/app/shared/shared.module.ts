import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TuiFormatNumberPipeModule } from '@taiga-ui/core';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiActionModule, TuiBreadcrumbsModule } from '@taiga-ui/kit';

import { HeaderComponent } from './header/header.component';
import { SpacexLogoComponent } from './header/spacex-logo/spacex-logo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BooleanLiteralModule } from './boolean-literal';
import { ListBaseComponent } from './list-base/list-base.component';
import { ListButtonComponent } from './list-button/list-button.component';
import { ListButtonDirective } from './list-button/list-button.directive';

const angularModule = [
  CommonModule,
  HttpClientModule,
  RouterModule,
  BooleanLiteralModule,
];
const taigaUi = [
  TuiFormatNumberPipeModule,
  TuiMoneyModule,
  TuiActionModule,
  TuiBreadcrumbsModule,
];
const components = [HeaderComponent, GalleryComponent, ListButtonComponent];
const directive = [ListButtonDirective];

@NgModule({
  declarations: [
    ...components,
    ...directive,
    SpacexLogoComponent,
    ListBaseComponent,
  ],
  imports: [...angularModule, ...taigaUi],
  exports: [...angularModule, ...taigaUi, components],
})
export class SharedModule {}
